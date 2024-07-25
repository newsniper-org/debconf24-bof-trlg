import PartySocket from 'partysocket';
import type { SerializedGameContext } from './types';

function initGameContext(): SerializedGameContext {
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

export class TRLGClient {
    private socket: PartySocket
    private gameId: string
    private _state: string
    private _isOnline: boolean
    private _gameContext: SerializedGameContext
    private _playerId: 0|1|2|3|null
    private _nowPlayerAccount: string

    private updateState: (value: string) => void
    private updateIsOnline: (value: boolean) => void
    private updateGameContext: (value: SerializedGameContext) => void
    private updatePlayerId: (value: 0|1|2|3|null) => void
    private updateNowPlayerAccount: (value: string) => void


    public get state() {
        return this._state
    }
    private set state(value) {
        this._state = value
        this.updateState(this.state)
    }

    public get isOnline() {
        return this._isOnline
    }
    private set isOnline(value) {
        this._isOnline = value
        this.updateIsOnline(value)
    }

    public get gameContext() {
        return this._gameContext
    }
    private set gameContext(value) {
        this._gameContext = value
        this.updateGameContext(value)
    }

    public get playerId() {
        return this._playerId
    }
    private set playerId(value) {
        this._playerId
        this.updatePlayerId(value)
    }

    public get nowPlayerAccount() {
        return this._nowPlayerAccount
    }
    private set nowPlayerAccount(value) {
        this._nowPlayerAccount
        this.updateNowPlayerAccount(value)
    }

    private onJoinFailed(message?: string) {
        const postfix = message ? `: ${message}` : ""
        console.log(`Failed to join the room ${this.gameId}${postfix}`)
    }

    private onRefresh(state: string, gameContext: SerializedGameContext, nowPlayerAccount: string) {
        [
            this._state, this._gameContext, this._nowPlayerAccount
        ] = [
            state, gameContext,nowPlayerAccount
        ]
    }

    public emit<T>(type: string, value: T) {
        this.socket.send(JSON.stringify({type, value}))
    }

    public emitWithoutValue(type: string) {
        this.socket.send(JSON.stringify({type}))
    }

    private onJoinSucceed() {
        console.log('Succeeded to join the room')
        this._isOnline = true
        this.emitWithoutValue("requestFetch")
    }

    private onPlayGranted(pid: 0|1|2|3) {
        console.log("Granted to play the game in the room")
        this._playerId = pid
    }
    
    private onPlayNotGranted() {
        console.log("Not Granted to play the game in the room")
    }

    public constructor(gameId: string, updateState: (value: string) => void, updateIsOnline: (value: boolean) => void, updateGameContext: (value: SerializedGameContext) => void, updatePlayerId: (value: 0|1|2|3|null) => void, updateNowPlayerAccount: (value: string) => void) {
        this.gameId = gameId
        this._isOnline = false
        this._gameContext = initGameContext()
        this._playerId = null
        this._nowPlayerAccount = ""

        this.updateState = updateState
        this.updateIsOnline = updateIsOnline
        this.updateGameContext = updateGameContext
        this.updatePlayerId = updatePlayerId
        this.updateNowPlayerAccount = updateNowPlayerAccount


        this.socket = new PartySocket({
            host: import.meta.env.NEXT_PUBLIC_PARTYKIT_URL,
            room: `${gameId}`,
        });
        this._state = ""

        this.socket.addEventListener("open", (event) => {
            console.log(`Connected to PartySocket server`)
        })

        this.socket.addEventListener("close", (event) => {
            console.log(`Disconnected to PartySocket server`)
            this._playerId = null
            this._isOnline = false
        })

        this.socket.addEventListener("message", (event) => {
            const message = JSON.parse(event.data);
            switch(message.type) {
                case "joinFailed":
                    this.onJoinFailed(message.value.message)
                    break;
                case "joinSucceed":
                    this.onJoinSucceed()
                    break;
                case "refresh":
                    let state: string = message.value.state
                    let gameContext: SerializedGameContext = message.value.gameContext
                    let nowPlayerAccount: string = message.value.nowPlayerAccount
                    this.onRefresh(state,gameContext,nowPlayerAccount)
                    break;
                case "playGranted":
                    this.onPlayGranted(message.value.playerId)
                    break;
                case "playNotGranted":
                    this.onPlayNotGranted()
                    break;
                default:
			        console.log(`Unknown type "${message.type}"`);
                    break;
            }
        })
    }
    
    public grant(accountEmail: string) {
        this.emit("grant", {account: accountEmail})
    }

    public close() {
        this.socket.close()
    }
}