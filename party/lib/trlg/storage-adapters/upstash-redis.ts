import { Redis } from "@upstash/redis/cloudflare"
import type { ActorStorageJSON, StorageAdapter } from "../storage";


export default class UpstashRedisAdapter implements StorageAdapter<true> {
    public readonly gameId: string
    private _json: ActorStorageJSON
    private redis: Redis

    public constructor(gameId: string, initialJSON: ActorStorageJSON, env: {
        NEXT_UPSTASH_REDIS_REST_URL: string,
        NEXT_UPSTASH_REDIS_REST_TOKEN: string
    }) {
        this.gameId = gameId
        this._json = initialJSON
        this.redis = Redis.fromEnv({
            NEXT_UPSTASH_REDIS_REST_URL: env.NEXT_UPSTASH_REDIS_REST_URL,
            NEXT_UPSTASH_REDIS_REST_TOKEN: env.NEXT_UPSTASH_REDIS_REST_TOKEN
        })
    }
    public async load(): Promise<"OK" | null> {
        const got = await this.redis.json.get<ActorStorageJSON>("session", `$.${this.gameId}`)
        if(got !== null) {
            this._json = {
                initialized: got.initialized,
                snapshotJSON: got.snapshotJSON,
                playerAccounts: [...got.playerAccounts]
            }
            return "OK"
        } else {
            return await this.redis.json.set("session", `$.${this.gameId}`,this._json)
        }
    }

    public async persist(persistedSnapshot: string): Promise<"OK" | null> {
        this._json.snapshotJSON = persistedSnapshot
        return await this.redis.json.set("session", `$.${this.gameId}`,this._json)
    }

    public get json(): typeof this._json {
        return {
            initialized: this._json.initialized,
            snapshotJSON: this._json.snapshotJSON,
            playerAccounts: [...this._json.playerAccounts]
        }
    }

    public async tryPreInit(pa0: string, pa1: string, pa2: string, pa3: string, snapshotJSON: string = "") {
        if((await this.redis.json.get<ActorStorageJSON>("session", `$.${this.gameId}`)) === null) {
            const json: ActorStorageJSON = {
                initialized: false,
                snapshotJSON,
                playerAccounts: [pa0, pa1, pa2, pa3]
            }
            this._json = json
            const session_result = await this.redis.json.set("session", `$.${this.gameId}`,json)

            let id_result: "OK" | "NO_NEED" | null
            const id_list = await this.redis.json.get<string[]>("id", "$")
            if(id_list === null) {
                id_result = await this.redis.json.set("id","$", new Array<string>(this.gameId))
            } else if(id_list.includes(this.gameId)) {
                id_result = "NO_NEED"
            } else {
                const updated = id_list.concat(this.gameId)
                id_result = await this.redis.json.set("id", "$", updated)
            }

            if(session_result === null || id_result === null) {
                return null
            } else {
                return "OK"
            }
        } else {
            let id_result: "OK" | "NO_NEED" | null
            const id_list = await this.redis.json.get<string[]>("id", "$")
            if(id_list === null) {
                id_result = await this.redis.json.set("id","$", new Array<string>(this.gameId))
            } else if(id_list.includes(this.gameId)) {
                id_result = "NO_NEED"
            } else {
                const updated = id_list.concat(this.gameId)
                id_result = await this.redis.json.set("id", "$", updated)
            }

            return id_result
        }
    }
}