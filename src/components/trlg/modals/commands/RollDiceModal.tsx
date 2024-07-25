import { component$, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";



export default component$(() => {
    const context = useContext(TRLGSocketContext)
    const socket = context.socket.value

    return <div>
        <button onClick$={(e,element) => {
            socket?.emitWithoutValue("rollDice")
        }}>주사위 굴리기</button>
    </div>
})