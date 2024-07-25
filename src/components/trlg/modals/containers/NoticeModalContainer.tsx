import { component$, Slot, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";

export default component$(() => {
    const context = useContext(TRLGSocketContext)
    const {
        nowPid
    } = context.gameContext.value
    
    const socket = context.socket.value
    const myPid = context.playerId.value
    return <div>
        <Slot/>
        <br/>
        {(myPid === nowPid) && <button
            onClick$={(e,element) => {
                socket?.emitWithoutValue("noticeChecked")
            }}>
            확인
        </button>}
    </div>
})