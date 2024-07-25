import { component$, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";
import { convertSalesCommand, filterMyLandProps } from "@/lib/trlg/component-utils";
import { amountSum, parseSalesCommand, type SalesType } from "@/lib/trlg/types"



export default component$(() => {
    const context = useContext(TRLGSocketContext)
    
    const {
        mainStatuses: {
            players,
            landProperties,
            cashCache
        },
        nowPid,
        feeCache
    } = context.gameContext.value

    const nowPlayer = players[nowPid]
    const nowCash = nowPlayer.cash
    const invoice = ((cashCache !== null) ? (nowCash - cashCache) : 0) + feeCache

    const nowMyLandProps = new Map([...filterMyLandProps(landProperties.locations,landProperties.map,nowPid)])

    const salesCommand = useSignal<SalesType>(new Map<number, number>())
    const totalAmount = amountSum(salesCommand.value)

    
    const socket = context.socket.value
 
    return (<div>
        <input type="text" value={""} onChange$={(e,element) => {
            salesCommand.value = parseSalesCommand(element.value,nowMyLandProps)
        }}/>
        <br/>
        <button
            disabled={
                ((nowCash + (totalAmount * 300000) - invoice) < 0) || (totalAmount <= 0)
            }
            onClick$={(e, element) => {
                const targets = Array.from(convertSalesCommand(salesCommand.value))
                socket?.emit("sell", {targets})
            }}>
            sell
        </button>
    </div>)
})