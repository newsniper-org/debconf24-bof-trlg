import {
    type NoSerialize,
    Slot,
    component$,
    noSerialize,
    useContextProvider,
    useVisibleTask$,
    useSignal,
    useStore,
} from '@builder.io/qwik';
import { TRLGSocketContext } from './TRLGSocketContext';
import type { SerializedGameContext } from '@/lib/trlg/types';
import PartySocket from 'partysocket';
import { TRLGClient } from '@/lib/trlg/socket';

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

const useSocket = (serverPath: string, gid: string) => {
    const socket = useSignal<NoSerialize<TRLGClient>>(undefined)
    const isOnline = useSignal<boolean>(false)
    const state = useSignal<string>("")
    const gameContext = useSignal<SerializedGameContext>(initGameContext())
    const gameId = useSignal<string>(gid)
    const playerId = useSignal<0|1|2|3|null>(null)
    const nowPlayerAccount = useSignal<string>("")

    useVisibleTask$(({cleanup}) => {
        const client = new TRLGClient(
            gameId.value,
            (value) => { state.value = value },
            (value) => { isOnline.value = value },
            (value) => { gameContext.value = value },
            (value) => { playerId.value = value },
            (value) => { nowPlayerAccount.value = value }
        )
        socket.value = noSerialize(client)

        cleanup(() => {
            client.close()
        })
    })

    return {
        socket,
        isOnline,
        state,
        gameContext,
        gameId,
        playerId
    }
}

export const TRLGSocketProvider = component$<{gid: string}>(({gid}) => {
    const {
        socket,
        isOnline,
        state,
        gameContext,
        gameId,
        playerId
    } = useSocket(import.meta.env.TRLG_BACKEND_SOCKETIO_URL,gid);

    useContextProvider(TRLGSocketContext,useStore({
        socket,
        isOnline,
        state,
        gameContext,
        gameId,
        playerId
    }));

    return <Slot/>
})