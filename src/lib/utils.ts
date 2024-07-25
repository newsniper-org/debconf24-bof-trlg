import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class MatchMapper<T, R> {
  private guards: [(v: T) => boolean, (v: T) => R][];
  private otherwise: (v: T) => R;
  constructor(_otherwise: (v: T) => R) {
    this.guards = []
    this.otherwise = _otherwise
  }
  addGuard(_check: (v: T) => boolean, _map: (v: T) => R) {
    this.guards.push([_check, _map])
    return this
  }
  removeGuard(idx: number) {
    this.guards.splice(idx,1)
    return this
  }
  getGuardsCount() {
    return this.guards.length
  }
  map(input: T): R {
    for(const [_check, _map] of this.guards) {
      if (_check(input)) {
        return _map(input)
      }
    }
    return this.otherwise(input)
  }

}

export function circularPushMap(a: number[], amount: number) {
  const result: {[key: number]: number} = {}
  Array.from({length: a.length}).forEach((_, idx) => {
      result[a[idx]] = a[(idx + amount) % a.length]
  })
  return result
}

export function isValidEmail(email: string): boolean {
	/* eslint-disable no-useless-escape */
	const reg =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return reg.test(email);
}
