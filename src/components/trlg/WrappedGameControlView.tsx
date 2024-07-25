import type { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import { TRLGSocketProvider } from "@/context/socket/TRLGSocketProvider";
import type { WrappedViewProps } from "@/lib/trlg/component-types";
import GameControlView from "./GameControlView";

export interface WrappedGameControlViewProps extends WrappedViewProps {
    session: Session
}

export default component$<WrappedGameControlViewProps>(({gameId, session}) => {
    return <TRLGSocketProvider gid={gameId}>
        <GameControlView gid={gameId} session={session}/>
    </TRLGSocketProvider>
})