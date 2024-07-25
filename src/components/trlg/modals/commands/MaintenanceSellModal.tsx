import { component$, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";
import { convertNumberMapToNumberDict, convertSalesCommand, filterMyLandProps } from "@/lib/trlg/component-utils";
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

    const nowMyLandProps = new Map([...filterMyLandProps(landProperties.locations,landProperties.map,nowPid)])
    const totalAmountAll = Array.from(nowMyLandProps.values()).reduce((acc, {amount}) => acc+Math.max(0,amount),0)

    const salesCommand = useSignal<SalesType>(new Map<number, number>())
    const totalAmountToSell = amountSum(salesCommand.value)
    const totalAmountRemaining = totalAmountAll - totalAmountToSell
    
    const socket = context.socket.value

    return (<div>
        <input type="text" value={""} onChange$={(e,element) => {
            salesCommand.value = parseSalesCommand(element.value,nowMyLandProps)
        }}/>
        <br/>
        <button
            disabled={
                ((nowCash + (totalAmountToSell * 300000) - (totalAmountRemaining * 100000)) < 0) || (totalAmountToSell <= 0)
            }
            onClick$={(e, element) => {
                const targets = Array.from(convertSalesCommand(salesCommand.value))
                socket?.emit("sell", {targets})
            }}>
            판매
        </button>
    </div>)
})