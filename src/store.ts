import { atom } from 'nanostores';
import type { SerializedGameContext } from './lib/trlg/types';
import type { TRLGClient } from './lib/trlg/socket';


export type RoomDataType = {
    state: string,
    isOnline: boolean,
    gameContext: SerializedGameContext,
    playerId: 0|1|2|3|null,
    nowPlayerAccount: string
}
export const rooms = atom<Record<string, RoomDataType>>({})

export const sockets: Record<string,TRLGClient> = {}

export function tryConnect(gameId: string, socket: TRLGClient) {
    const exists = gameId in sockets
    if(!exists) {
        sockets[gameId] = socket
    }
}