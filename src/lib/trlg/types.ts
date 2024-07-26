import { circularPushMap } from "@/lib/utils";
import { BiMap } from "@rimbu/core";


export type TicketsType = {
    feeExemption: number;
    taxExemption: number;
    bonus: number;
    doubleLotto: number;
    lawyer: number;
    freeHospital: number;
}

export type PlayerStatus = {
    cash: number;
    location: number;
    remaining: {
      jailTurns: 0 | 1 | 2 | 3;
      tickets: TicketsType
    };
    cycle: number
    univEducation: 0|1|2;
};

export type LandPropertyStatus = {
    operatorId: 0|1|2|3;
    amount: number;
}

export const DICES = [1,2,3,4,5,6] as const

export type DiceType = typeof DICES[number]

export const DICES_SUMS_LOOKUP = {
    1: { 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7} ,
    2: { 1: 3, 2: 4, 3: 5, 4: 6, 5: 7, 6: 8 },
    3: { 1: 4, 2: 5, 3: 6, 4: 7, 5: 8, 6: 9 },
    4: { 1: 5, 2: 6, 3: 7, 4: 8, 5: 9, 6: 10 },
    5: { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10, 6: 11 },
    6: { 1: 7, 2: 8, 3: 9, 4: 10, 5: 11, 6: 12 }
} as const

export type DicesSumType = typeof DICES_SUMS_LOOKUP[DiceType][DiceType]


export type SALARY = 3000000
export type TAXES = 1000000

export const JAIL_LOCATION = 9
export const UNIVERSITY_LOCATION = 18
export const CONCERT_LOCATION = 27
export const PARK_LOCATION = 36
export const HOSPITAL_LOCATION = 45
export const LOTTO_LOCATION = 3
export const FUND_LOCATION = 52


export function getInfraLocation(kind: InfraKindType): number {
    return INFRAS.getKey(kind) as number
}

const INDUSTRIALS = [35,39,44] as const
export type IndustrialLocationType = typeof INDUSTRIALS[number]

export const CELLS_COUNT = 54

export type Cell = ({
    location: 0;
    type: "start";
    maxBuildable: 0;
} | {
    location: CityLocationType;
    type: "city";
    maxBuildable: 3;
    group: CityGroupType;
} | {
    location: IndustrialLocationType;
    type: "industrial";
    maxBuildable: 1;
} | {
    location: number;
    type: "chance" | "infra";
    maxBuildable: 0;
} | {
    location: typeof JAIL_LOCATION;
    type: "jail";
    maxBuildable: 0;   
} | {
    location: number;
    type: "transportation",
    maxBuildable: 0;
    amountToTarget: number
} | {
    location: typeof UNIVERSITY_LOCATION;
    type: "univ";
    maxBuildable: 0;
} | {
    location: typeof CONCERT_LOCATION;
    type: "concert";
    maxBuildable: 0;
} | {
    location: typeof PARK_LOCATION;
    type: "park";
    maxBuildable: 0;
} | {
    location: typeof HOSPITAL_LOCATION;
    type: "hospital";
    maxBuildable: 0;
} | {
    location: typeof LOTTO_LOCATION;
    type: "lotto";
    maxBuildable: 0;
} | {
    location: typeof FUND_LOCATION;
    type: "fund";
    maxBuildable: 0;
})


export const _CITY_GROUPS = {
    0: [2,4] as const,
    1: [6,8] as const,
    2: [11,12,13] as const,
    3: [15,17] as const,
    4: [20,22] as const,
    5: [24,25,26] as const,
    6: [29,30] as const,
    7: [32,33,34] as const,
    8: [38,40] as const,
    9: [42,43] as const,
    10: [47,48,49] as const,
    11: [51,53] as const
}

export type CityGroupType = keyof typeof _CITY_GROUPS
export const CITY_LOCATIONS = [2,4,6,8,11,12,13,15,17,20,22,24,25,26,29,30,32,33,34,38,40,42,43,47,48,49,51,53] as const
export type CityLocationType = typeof _CITY_GROUPS[CityGroupType][number]

export const CITY_GROUPS: {
    [loc in CityLocationType]: CityGroupType
} = {
    2: 0, 4: 0,
    6: 1, 8: 1,
    11: 2, 12: 2, 13: 2,
    15: 3, 17: 3,
    20: 4, 22: 4,
    24: 5, 25: 5, 26: 5,
    29: 6, 30: 6,
    32: 7, 33: 7, 34: 7,
    38: 8, 40: 8,
    42: 9, 43: 9,
    47: 10, 48: 10, 49: 10,
    51: 11, 53: 11
}

export const TRANSITS = [1,10,19,28,37,46]
export const TRANSIT_TARGETS = circularPushMap(TRANSITS, 1)

const CHANCES = [5,14,23,31,41,50]

export type InfraKindType = "water" | "electricity" | "gas"
const INFRAS = BiMap.of<number, InfraKindType>(
    [7,"water"],
    [16, "electricity"],
    [21, "gas"]
)

export type LandPropSaleType = {location: number, amount: number}



export type EventType = {type: "check"}
    | {type: "purchase", value: {amount: number}}
    | {type: "sell", targets: LandPropSaleType[]}
    | {type: "nop"}
    | {type: "rollDice"}
    | {type: "thanksToLawyer"}
    | {type: "showMeTheMONEY"}
    | {type: "checkChanceCard"}
    | {type: "pickTargetPlayer"}
    | {type: "pickTargetLocation", targetLocation: number}
    | {type: "pickTargetGroup", targetGroup: CityGroupType}
    | {type: "tryLotto", choice: LottoChoiceType}
    | {type: "stopLotto"}
    | {type: "useTicket"}
    | {type: "startLotto", useDoubleLottoTicket: boolean}
    | {type: "pickTargetsPair", my: CityLocationType, others: CityLocationType}

    

export type LottoChoiceType = "bothOdd" | "oddEven" | "bothEven"


const _BUILDABLE_LOCATIONS = [...CITY_LOCATIONS, ...INDUSTRIALS] as const
export const BUILDABLE_LOCATIONS = [..._BUILDABLE_LOCATIONS] as number[]
export type BuildableLocationType = typeof _BUILDABLE_LOCATIONS[number]




const NORMAL_CHANCE_CARD_KINDS = [
    "newborn",
    "earthquake",
    "taxHeaven",
    "disease",
    "emergencyAid",
    "drug",
    "nursing",
    "inheritGet",
    "healthy",
    "typhoon",
    "scholarship",
    "feeExemption",
    "bonus",
    "doubleLotto",
    "insiderTrading",
    "taxExemption",
    "tooMuchElectricity",
    "lawyersHelp",
    "soaringStockPrice",
    "plungeInStockPrice",
    "studyingHard"
] as const
const NEEDS_CHECK_CHANCE_CARD_KINDS = [
    "maintenance",
    "inheritDonate",
    "cyberSecurityThreat",
    "fakeNews",
    "voicePhishing",
    "trafficAccident"
] as const
const SIDECAR_CHANCE_CARD_KINDS = [
    "catastrophe",
    "pandemic"
] as const
const TARGETTING_CHANCE_CARD_KINDS = [
    "quirkOfFate",
    "greenNewDeal",
    "trafficJam",
    "quickMove",
    "extinction",
    "trade"
] as const


export type NormalChanceCardKindType = typeof NORMAL_CHANCE_CARD_KINDS[number]
export type NeedsCheckChanceCardKindType = typeof NEEDS_CHECK_CHANCE_CARD_KINDS[number]
export type SidecarChanceCardKindType = typeof SIDECAR_CHANCE_CARD_KINDS[number]
export type TargettingChanceCardKindType = typeof TARGETTING_CHANCE_CARD_KINDS[number]

export type ChanceCardKindType = NormalChanceCardKindType | NeedsCheckChanceCardKindType | SidecarChanceCardKindType | TargettingChanceCardKindType

export type JailTurnType = "byLawyer" | "byDice" | "byCash" | false

export type SerializedGameContext = {
    mainStatuses: {
        players: [PlayerStatus, PlayerStatus, PlayerStatus, PlayerStatus];
        landProperties: {
            locations: number[],
            map: {
                [loc: number]: {
                    operatorId: 0|1|2|3,
                    amount: number
                }
            }
        }
        govIncome: number;
        cashCache: number | null;
    }
    turns: number;
    nowPid: 0|1|2|3;
    dicesNow: [DiceType, DiceType] | null;
    fund: number;
    ending: "hasWinner" | "hasBankrupt" | null;
    financialWarningCache: "needFund" | "needBasicIncome" | null;
    remainingSidecars: {
        catastrophe: number;
        pandemic: number;
    };
    freshChanceCardCache: ChanceCardKindType | null;
    lottoTriesCountCache: 0|1|2|3;
    lottoCache: "ongoing" | "lost" | "won" | null;
    doubleLotto: boolean | null;
    dicesSecondary: [DiceType, DiceType] | null;
    feeCache: number;
    maxPurchasableAmountCache: number;
    wonLotto: number|null;
    jailTurnResultCache: JailTurnType | null;
}

export function mapQuadruplet<T, U>([e0,e1,e2,e3]: [T, T, T, T], m: (t: T) => U): [U, U, U, U] {
    return [m(e0), m(e1), m(e2), m(e3)]
}

export type Tuple<T, Length extends number> = [...T[]] & {length: Length}

export function locateQuadruplet<T, InLength extends number, OutLength extends number>(input: Tuple<T, InLength>, locs: Tuple<keyof typeof input, OutLength>): Tuple<T, OutLength> {
    return [...locs.map((loc) => input[loc])] as Tuple<T, OutLength>
}

export type SalesType = Map<number, number>


export function* _pscInternal(tokens: string[]) {
    for(const token of tokens) {
        const match = token.match(new RegExp(/(\d+):(\d+)/))
        if (match !== null) {
            const loc = parseInt(match[1])
            const amountToSell = parseInt(match[2])
            if(isFinite(loc) && isFinite(amountToSell)) {
                yield [loc, amountToSell] as [number, number]
                continue
            } else {
                yield null
                continue
            }
        } else {
            yield null
            continue
        }
    }
}

export function* filterSalesCommand(cmdlets: Map<number, number>, nowOwning: Map<number, {operatorId: 0|1|2|3, amount: number}>) {
    for(const [loc, amountToSell] of cmdlets) {
        const entry = nowOwning.get(loc)
        if((entry !== undefined) && (entry.amount > 0) && (amountToSell > 0)) {
            yield [loc, Math.min(amountToSell, entry.amount)] as [number, number]
        }
    }
}


export function parseSalesCommand(cmd: string, nowOwning: Map<number, {operatorId: 0|1|2|3, amount: number}>): SalesType {
    const tokens = cmd.split(" ")
    const raw = [..._pscInternal(tokens)]
    if(raw.includes(null)) {
        new Map<number, number>()
    }
    const cmdlets = new Map(raw.filter((item) => (item !== null)))
    const dict = Array.from(filterSalesCommand(cmdlets,nowOwning)).reduce<Map<number, number>>(
        (acc, [loc, amountToSell]) => {
            let output: typeof acc = new Map(acc)
            const got = output.get(loc)
            const tmp = (got !== undefined) ? (amountToSell + got) : amountToSell
            return output.set(loc,Math.min(tmp,(nowOwning.get(loc)?.amount) as number))
        },new Map<number, number>()
    )
    return dict
}

export abstract class ModalOrNoticeBase extends HTMLElement {
    protected gameId: string

    protected constructor() {
        super()
        this.gameId = this.dataset.gameId as string
    }
}

export type ValuesType = {
    state: string,
    isOnline: boolean,
    gameContext: SerializedGameContext,
    playerId: 0|1|2|3|null,
    nowPlayerAccount: string
}

export type UpdateReturnType<E extends EventType = EventType> = [boolean, E]

export type ElementEventPair<T extends HTMLElement> = [T, () => void]


export function amountSum(salesCommand: SalesType) {
    const amount = Array.from(salesCommand.entries()).reduce((acc, [_, a]) => acc+a, 0)
    return amount
}


export function initGameContext(): SerializedGameContext {
    return {
        mainStatuses: {
            players: [
                {
                    cash: 3000000,
                    location: 0,
                    remaining: {
                        jailTurns: 0,
                        tickets: {
                            feeExemption: 0,
                            taxExemption: 0,
                            bonus: 0,
                            doubleLotto: 0,
                            lawyer: 0,
                            freeHospital: 0
                        }
                    },
                    cycle: 0,
                    univEducation: 0
                },
                {
                    cash: 3000000,
                    location: 0,
                    remaining: {
                        jailTurns: 0,
                        tickets: {
                            feeExemption: 0,
                            taxExemption: 0,
                            bonus: 0,
                            doubleLotto: 0,
                            lawyer: 0,
                            freeHospital: 0
                        }
                    },
                    cycle: 0,
                    univEducation: 0
                },
                {
                    cash: 3000000,
                    location: 0,
                    remaining: {
                        jailTurns: 0,
                        tickets: {
                            feeExemption: 0,
                            taxExemption: 0,
                            bonus: 0,
                            doubleLotto: 0,
                            lawyer: 0,
                            freeHospital: 0
                        }
                    },
                    cycle: 0,
                    univEducation: 0
                },
                {
                    cash: 3000000,
                    location: 0,
                    remaining: {
                        jailTurns: 0,
                        tickets: {
                            feeExemption: 0,
                            taxExemption: 0,
                            bonus: 0,
                            doubleLotto: 0,
                            lawyer: 0,
                            freeHospital: 0
                        }
                    },
                    cycle: 0,
                    univEducation: 0
                }
            ],
            landProperties: {
                locations: [],
                map: {}
            },
            govIncome: 0,
            cashCache: null
        },
        turns: 0,
        dicesNow: null,
        dicesSecondary: null,
        fund: 0,
        ending: null,
        financialWarningCache: null,
        nowPid: 0,
        remainingSidecars: {
            catastrophe: 0,
            pandemic: 0
        },
        freshChanceCardCache: null,
        lottoTriesCountCache: 0,
        doubleLotto: null,
        lottoCache: null,
        feeCache: 0,
        maxPurchasableAmountCache: 0,
        wonLotto: null,
        jailTurnResultCache: null
    }
}