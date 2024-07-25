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
        maxPurchasableAmountCache
    } = context.gameContext.value

    const amount = useSignal<number>(0)

    const nowCash = cashCache ?? players[nowPid].cash

    const socket = context.socket.value

    return (<div>
        <input type="range" value={1} step={1} min={1} max={maxPurchasableAmountCache} onChange$={(e,element) => {
            amount.value = parseInt(element.value)
        }}/>
        <br/>
        <button
            disabled={(nowCash < (amount.value * 300000))}
            onClick$={(e, element) => {
                socket?.emit("purchase", amount.value)
            }}>
            구매
        </button>
    </div>)
})