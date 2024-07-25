import {
    type Signal,
    createContextId,
    type NoSerialize,
} from '@builder.io/qwik';
import type { SerializedGameContext } from '@/lib/trlg/types';
import type { TRLGClient } from '@/lib/trlg/socket';

export interface SocketClient<T> {
    socket: Signal<NoSerialize<T>>;
    isOnline: Signal<boolean>;
    state: Signal<string>;
    gameContext: Signal<SerializedGameContext>;
    gameId: Signal<string>;
    playerId: Signal<0|1|2|3|null>;
    nowPlayerAccount: Signal<string>;
};
  
export const TRLGSocketContext = createContextId<SocketClient<TRLGClient>>('socket.context');



export function unwrapContext<T>(context: SocketClient<T>): {
    [prop in keyof SocketClient<T>]: SocketClient<T>[prop]['value']
} {
    return {
        socket: context.socket.value,
        isOnline: context.isOnline.value,
        state: context.state.value,
        gameContext: context.gameContext.value,
        gameId: context.gameId.value,
        playerId: context.playerId.value,
        nowPlayerAccount: context.nowPlayerAccount.value
    }
}