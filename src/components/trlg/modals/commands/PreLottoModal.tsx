import { component$, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";



export default component$(() => {
    const context = useContext(TRLGSocketContext)
    
    const {
        mainStatuses: {
            players,
            cashCache
        },
        nowPid,
        
    } = context.gameContext.value
    
    const notUsableDoubleLottoTicket = !(players[nowPid].remaining.tickets.doubleLotto > 0)

    
    const socket = context.socket.value

    return <div>
        <button disabled={notUsableDoubleLottoTicket} onClick$={(e,element) => socket?.emit("startLotto", true)}>두배 찬스를 사용하여 도전</button>
        <br/>
        <button onClick$={(e,element) => socket?.emit("startLotto", false)}>두배 찬스 사용하지 않고 도전</button>
        <br/>
        <button onClick$={(e,element) => socket?.emitWithoutValue("nop")}>도전하지 않기</button>
    </div>
})