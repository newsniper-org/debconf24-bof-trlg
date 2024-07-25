import { callbackify } from 'node:util';
import { ActorStorage, AsyncActorStorage } from 'party/lib/trlg/actors';
import type { EventType } from 'party/lib/trlg/machine';
import UpstashRedisAdapter from 'party/lib/trlg/storage-adapters/upstash-redis';
import { AsyncGuardedExecuter, AsyncGuardedUnionMappedWeakExecuter, GuardedExecuter, GuardedUnionMappedWeakExecuter, type IAsyncGuardedExecuter, type IGuardedExecuter } from 'party/lib/trlg/utils';
import type * as Party from 'partykit/server';

export default class TRLGServer implements Party.Server {
    private readonly gameId: string

    private actorStorage: AsyncActorStorage<UpstashRedisAdapter> | null

    private env: Record<string, unknown> = {}

    private grantedSocketIds: Set<string> = new Set<string>()

    constructor(readonly room: Party.Room) {
        this.gameId = room.id
        this.actorStorage = null
        this.env = {
            ...room.env
        }
        
    }

    private async trigger(event: EventType) {
        if(this.actorStorage === null) {
            return;
        }
        await this.actorStorage.trigger(event)
        const {state, gameContext, nowPlayerAccount} = this.actorStorage.serializedGameContext
        this.room.broadcast(JSON.stringify({type: "refresh", value: {state, gameContext, nowPlayerAccount}}))
    }

    private fetch(sender: Party.Connection) {
        if (this.actorStorage === null) {
            return
        }
        const {state, gameContext, nowPlayerAccount} = this.actorStorage.serializedGameContext
        sender.send(JSON.stringify({type: "refresh", value: {state, gameContext, nowPlayerAccount}}))
    }

    private readonly connectionMessageExecuter: IAsyncGuardedExecuter<{sender: Party.Connection,type: string, value: any}>
        = new AsyncGuardedExecuter<{sender: Party.Connection, type: string, value: any}>()
        .addMatch(
            ({type}) => type === "requestFetch",
            async ({sender}) => {
                this.fetch(sender)
            }
        ).addMatch(
            ({type}) => type === "grant",
            async ({value, sender}) => {
                if(this.actorStorage === null) {
                    return;
                }
                const found = this.actorStorage.findPid(value.account)
                if(found !== null) {
                    this.grantedSocketIds.add(sender.id)
                    sender.send(JSON.stringify({type: "playGranted", value: {playerId: found}}))
                } else {
                    sender.send(JSON.stringify({type: "playNotGranted"}))
                }
            }
        )

    private readonly grantNeededMessageExecuter: IAsyncGuardedExecuter<{type: string, value: any}>
        = new AsyncGuardedUnionMappedWeakExecuter<{type: string, value: any}, EventType>()
        .addMatch(
            ({type}) => type === "nop",
            (_) => ({type: "nop"}),
            async (mapped) => { await this.trigger(mapped) }
        ).addMatch(
            ({type}) => type === "pickTargetGroup",
            ({value}) => ({type: "pickTargetGroup", targetGroupId: value.targetGroup}),
            async (mapped) => { await this.trigger(mapped) }
        ).addMatch(
            ({type}) => type === "pickTargetLocation",
            ({value}) => ({type: "pickTargetLocation", targetLocation: value.targetLocation}),
            async (mapped) => { await this.trigger(mapped) }
        ).addMatch(
            ({type}) => type === "pickTargetPlayer",
            (_) => ({type: "pickTargetPlayer"}),
            async (mapped) => { await this.trigger(mapped) }
        ).addMatch(
            ({type}) => type === "pickTargetsPair",
            ({value}) => ({type: "pickTargetsPair", my: value.my, others: value.others}),
            async (mapped) => { await this.trigger(mapped) }
        ).addMatch(
            ({type}) => type === "rollDice",
            (_) => ({type: "rollDice"}),
            async (mapped) => { await this.trigger(mapped) }
        ).addMatch(
            ({type}) => type === "thanksToLawyer",
            (_) => ({type: "thanksToLawyer"}),
            async (mapped) => { await this.trigger(mapped) }
        ).addMatch(
            ({type}) => type === "showMeTheMONEY",
            (_) => ({type: "showMeTheMONEY"}),
            async (mapped) => { await this.trigger(mapped) }
        ).addMatch(
            ({type}) => type === "useTicket",
            (_) => ({type: "useTicket"}),
            async (mapped) => { await this.trigger(mapped) }
        ).addMatch(
            ({type}) => type === "startLotto",
            ({value}) => ({type: "startLotto", useDoubleLottoTicket: value}),
            async (mapped) => { await this.trigger(mapped) }
        ).addMatch(
            ({type}) => type === "tryLotto",
            ({value}) => ({type: "tryLotto", choice: value.choice}),
            async (mapped) => { await this.trigger(mapped) }
        ).addMatch(
            ({type}) => type === "stopLotto",
            (_) => ({type: "stopLotto"}),
            async (mapped) => { await this.trigger(mapped) }
        ).addMatch(
            ({type}) => type === "sell",
            ({value}) => ({type: "sell", targets: value.targets}),
            async (mapped) => { await this.trigger(mapped) }
        )
    
    private warn(socketId: string) {
        console.log(`invalid socket access from '${socketId}' detected`)
    }

    async onStart() {
        this.actorStorage = await AsyncActorStorage.generate<UpstashRedisAdapter>(this.gameId,`games/${this.gameId}.json`,{
            initialized: false,
            snapshotJSON: "",
            playerAccounts: ["", "", "", ""]
        }, async (_, init) => new UpstashRedisAdapter(this.gameId,init, {
            UPSTASH_REDIS_REST_URL: this.env.UPSTASH_REDIS_REST_URL as string,
            UPSTASH_REDIS_REST_TOKEN: this.env.UPSTASH_REDIS_REST_TOKEN as string
        }))
    }

    onConnect(connection: Party.Connection, ctx: Party.ConnectionContext) {
        console.log(`socket ${connection.id} is connected`)
    }
    async onMessage(data: string, sender: Party.Connection) {
        const message = JSON.parse(data)
        const { type, value }: { type: string, value: any } = message
        if(!(await this.connectionMessageExecuter.execute({
            sender,type,value
        }))) {
            if(this.grantedSocketIds.has(sender.id)) {
                if(!(await this.grantNeededMessageExecuter.execute({type, value}))) {
                    this.warn(sender.id)
                }
            } else {
                this.warn(sender.id)
            }
        }
    }
}

TRLGServer satisfies Party.Worker