import { component$, Slot, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";

export default component$(() => {
    const context = useContext(TRLGSocketContext)
    const {
        nowPid
    } = context.gameContext.value
    const myPid = context.playerId.value
    const state = context.state.value
    return <>{((myPid !== null) && (myPid === nowPid)) ? <Slot name="fit"/> : <Slot name="notFit" />}</>
})