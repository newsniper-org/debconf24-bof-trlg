import { component$, useContext } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";
import { getUseTicketModalDisplay } from "@/lib/trlg/component-utils";


export default component$(() => {
    const context = useContext(TRLGSocketContext)

    const ticketName: string = getUseTicketModalDisplay(context.state.value)

    return <div>
        <p>{ticketName} 티켓을 사용하시겠습니까?</p>
        <br/>
        <button onClick$={() => {
            context.socket.value?.emitWithoutValue("useTicket")
        }}>네</button>
        <button onClick$={() => {
            context.socket.value?.emitWithoutValue("nop")
        }}>아니오</button>
    </div>
})