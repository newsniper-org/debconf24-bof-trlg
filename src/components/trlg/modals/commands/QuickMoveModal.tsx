import { component$, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";
import { BUILDABLE_LOCATIONS } from "@/lib/trlg/types";



export default component$(() => {
    const context = useContext(TRLGSocketContext)
    const socket = context.socket.value

    const {
        mainStatuses: { players },
        nowPid,
    } = context.gameContext.value

    const nowLocation = players[nowPid].location

    const targetLocation = useSignal<number>(0)

    
    return <div>
        <p>원하는 위치로 즉시 이동합니다. (출발점을 지나가는 경로인 경우, 월급을 받습니다.)</p>
        <input type="number" valueAsNumber={nowLocation} min={0} max={53}  onChange$={(e, element) => {
            targetLocation.value = element.valueAsNumber
        }} /><br/>
        <button onClick$={(e,element) => {
            socket?.emit("pickTargetLocation", {targetLocation: targetLocation.value})
        }}>즉시 이동</button>
    </div>
})