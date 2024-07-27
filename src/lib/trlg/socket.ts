import type { SerializedGameContext } from './types';

import { io, Socket } from "socket.io-client"

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
    private socket: Socket
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

    private gameId: string

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

    private onRefresh(state: string, gameContext: SerializedGameContext, nowPlayerAccount: string) {
        [
            this._state, this._gameContext, this._nowPlayerAccount
        ] = [
            state, gameContext,nowPlayerAccount
        ]
    }

    public emit<T>(type: string, value: T) {
        this.socket.emit(type, value)
    }

    public emitWithoutValue(type: string) {
        this.socket.emit(type)
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
        this._isOnline = false
        this.gameId = gameId
        this._gameContext = initGameContext()
        this._playerId = null
        this._nowPlayerAccount = ""

        this.updateState = updateState
        this.updateIsOnline = updateIsOnline
        this.updateGameContext = updateGameContext
        this.updatePlayerId = updatePlayerId
        this.updateNowPlayerAccount = updateNowPlayerAccount


        this.socket = io(
            import.meta.env.NEXT_SOCKET_URL,
            {
              withCredentials: true,
            }
        )
        this._state = ""

        this.socket.on("connect", () => {
            console.log(`Connected to Socket.IO server`)
            this.socket.emit("joinRoom", {gameId: this.gameId})
        })

        this.socket.on("joinFailed", ({msg}: {msg: string}) => {
            console.log(`Failed to join the room: ${msg}`);
        });

        this.socket.on("disconnect",() => {
            console.log(`Disconnected to Socket.IO server`)
            this._playerId = null
            this._isOnline = false
        })

        this.socket.on("refresh", ({state, gameContext, nowPlayerAccount}: {state: string, gameContext: SerializedGameContext, nowPlayerAccount: string}) => {
            this.onRefresh(state,gameContext,nowPlayerAccount)
        })

        this.socket.on("playGranted", ({playerId}: {playerId: 0|1|2|3}) => {
            this.onPlayGranted(playerId)
        })

        this.socket.on("playNotGranted", () => {
            this.onPlayNotGranted()
        })

        this.socket.on("joinSucceed", () => {
            this.onJoinSucceed()
        })
    }

    public close() {
        this.socket.close()
    }
}