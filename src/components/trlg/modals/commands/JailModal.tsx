import { component$, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";


export default component$(() => {
    const context = useContext(TRLGSocketContext)
    
    const {
        mainStatuses: { players },
        nowPid
    } = context.gameContext.value
    
    const {
        cash,
        remaining: { tickets: { lawyer } }
    } = players[nowPid]

    const socket = context.socket.value


    return <div>
        <p>변호사 호출 티켓 보유량 : {Math.max(0,lawyer)}</p>
        <br/>
        <button
            disabled={!(Math.max(0,lawyer) !== 0)}
            onClick$={(e, element) => {
                socket?.emitWithoutValue("thanksToLawyer")
            }}>
            변호사의 도움을 받기
        </button>
        <button
            disabled={!(cash >= 400000)}
            onClick$={(e, element) => {
                socket?.emitWithoutValue("showMeTheMONEY")
            }}>
            보석금 내고 풀려나기
        </button>
        <button
            onClick$={(e, element) => {
                socket?.emitWithoutValue("rollDice")
            }}>
            운빨을 노려보기
        </button>
    </div>
})