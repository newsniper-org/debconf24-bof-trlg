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

    const correct1 = landProperties.locations.includes(targetLocation.value) && (landProperties.map[targetLocation.value].operatorId === nowPid) && (landProperties.map[targetLocation.value].amount < 3)

    const disabled = !(correct0 && correct1)

    return <div>
        <p>자신이 건물을 가지고 있는 도시(들) 중 한 곳에 무상으로 건물 한 채를 증설합니다.</p>
        <p>(지나온 사이클 횟수에 따른 건설 제한과 무관하게 증설 가능합니다.)</p><br/>
        <input type="number" valueAsNumber={0} min={0} max={53}  onChange$={(e, element) => {
            targetLocation.value = element.valueAsNumber
        }} /><br/>
        <button disabled={disabled} onClick$={(e,element) => {
            socket?.emit("pickTargetLocation", {targetLocation: targetLocation.value})
        }}>증설공사 시행</button>
    </div>
})