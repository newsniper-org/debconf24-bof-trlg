import { component$ } from "@builder.io/qwik";
import { TRLGSocketProvider } from "@/context/socket/TRLGSocketProvider";
import type { WrappedViewProps } from "@/lib/trlg/component-types";
import GameView from "./GameView";

export default component$<WrappedViewProps>(({gameId}) => {
    return <TRLGSocketProvider gid={gameId}>
        <GameView/>
    </TRLGSocketProvider>
})