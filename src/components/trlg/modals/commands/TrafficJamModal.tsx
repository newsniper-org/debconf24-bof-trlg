import { component$, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";
import { BUILDABLE_LOCATIONS } from "@/lib/trlg/types";



export default component$(() => {
    const context = useContext(TRLGSocketContext)
    const socket = context.socket.value

    const {
        mainStatuses: { landProperties },
        nowPid,
    } = context.gameContext.value


    const targetLocation = useSignal<number>(0)

    
    const correct0 = BUILDABLE_LOCATIONS.includes(targetLocation.value)

    const correct1 = landProperties.locations.includes(targetLocation.value) && (landProperties.map[targetLocation.value].operatorId !== nowPid)

    const disabled = !(correct0 && correct1)

    return <div>
        <p>자신이 건물을 가지고 있지 않은 도시(들) 중 원하는 곳의 건물 한 채를 철거합니다</p>
        <input type="number" valueAsNumber={0} min={0} max={53}  onChange$={(e, element) => {
            targetLocation.value = element.valueAsNumber
        }} /><br/>
        <button disabled={disabled} onClick$={(e,element) => {
            socket?.emit("pickTargetLocation", {targetLocation: targetLocation.value})
        }}>철거 시행</button>
    </div>
})