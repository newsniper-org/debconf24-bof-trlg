import { Redis } from "@upstash/redis"

export const redis = new Redis({
    url: import.meta.env.NEXT_UPSTASH_REDIS_REST_URL,
    token: import.meta.env.NEXT_UPSTASH_REDIS_REST_TOKEN
})