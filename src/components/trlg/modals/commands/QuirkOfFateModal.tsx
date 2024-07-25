import { component$, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";



export default component$(() => {
    const context = useContext(TRLGSocketContext)
    const socket = context.socket.value

    return <div>
        <button onClick$={(e,element) => {
            socket?.emit("pickTargetPlayer")
        }}>운명의 장난으로 누구와 얽히게 될까요?</button>
    </div>
})