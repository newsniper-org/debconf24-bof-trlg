import { redis } from "@/lib/redis";
import type { APIRoute } from "astro";

function randomAvoidingGivenIds(given: string[], generator: () => string) {
    let generated: string
    do {
        let generated1 = generator()
        let generated2 = generator()
        generated = `${generated1}${generated2}`
    } while (given.includes(generated));
    
    return generated
}

function checkAllStringsDifferent(items: string[]) {
    const deduplicated = new Set(items)
    return (deduplicated.size) === (items.length)
}

const RAND_PERMUT = [
    [0,1,2,3] as const,
    [0,1,3,2] as const,
    [0,2,1,3] as const,
    [0,2,3,1] as const,
    [0,3,1,2] as const,
    [0,3,2,1] as const,

    [1,0,2,3] as const,
    [1,0,3,2] as const,
    [1,2,0,3] as const,
    [1,2,3,0] as const,
    [1,3,2,0] as const,
    [1,3,0,2] as const,

    [2,0,1,3] as const,
    [2,0,3,1] as const,
    [2,1,0,3] as const,
    [2,1,3,0] as const,
    [2,3,1,0] as const,
    [2,3,0,1] as const,

    [3,0,1,2] as const,
    [3,0,2,1] as const,
    [3,1,0,2] as const,
    [3,1,2,0] as const,
    [3,2,1,0] as const,
    [3,2,0,1] as const
]

function randomMix(accounts: [string, string, string, string]): [string, string, string, string] {
    const idx = Math.floor(Math.random() * RAND_PERMUT.length)
    const [i0, i1, i2, i3] = RAND_PERMUT[idx]
    return [accounts[i0], accounts[i1], accounts[i2], accounts[i3]]
}


export const POST: APIRoute = async ({request}) => {
    if(request.headers.get("Content-Type") === "application/json") {
        const body = await request.json() as string[]
        const noDup = checkAllStringsDifferent(body)

        if(!noDup) {
            return new Response("duplicated emails detected", {status: 400})
        }
        if(body.length < 4) {
            return new Response("less than 4 emails given", {status: 400})
        }
        const idList = (await redis.json.get<string[]>("id", "$")) ?? new Array<string>()
        const generated = randomAvoidingGivenIds(idList,() => {
            return Math.random().toString(36).substring(2,8)
        })
        await redis.json.set("id", "$",generated.concat(generated))

        const init: {
            initialized: boolean,
            snapshotJSON: string,
            playerAccounts: [string, string, string, string]
        } = {
            initialized: false,
            snapshotJSON: "",
            playerAccounts: randomMix([body[0], body[1], body[2], body[3]])
        }

        await redis.json.set("session", `$.${generated}`,init)

        return new Response(JSON.stringify({
            newGameId: generated
        }), {status: 200})
    }
    return new Response("wrong request body", {status: 400})
}