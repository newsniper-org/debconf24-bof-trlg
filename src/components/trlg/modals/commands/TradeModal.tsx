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


    const myTargetLocation = useSignal<number>(0)
    const othersTargetLocation = useSignal<number>(0)
    
    const correctMy0 = BUILDABLE_LOCATIONS.includes(myTargetLocation.value)
    const correctMy1 = landProperties.locations.includes(myTargetLocation.value) && (landProperties.map[myTargetLocation.value].operatorId === nowPid)

    const correctOthers0 = BUILDABLE_LOCATIONS.includes(othersTargetLocation.value)
    const correctOthers1 = landProperties.locations.includes(othersTargetLocation.value) && (landProperties.map[othersTargetLocation.value].operatorId === nowPid)


    const disabled = !(correctMy0 && correctMy1 && correctOthers0 && correctOthers1 && (myTargetLocation.value !== othersTargetLocation.value))

    return <div>
        <p>자신이 건물을 가지고 있는 도시(들) 중 한 곳과, 다른 플레이어들이 건물을 가지고 있는 도시(들) 중 한 곳을 골라, 둘의 건물들을 맞교환합니다.</p>
        <p>(양측의 건물 갯수 차이는 무시합니다.)</p>
        <br/>
        <label>자신의 도시</label><input type="number" valueAsNumber={0} min={0} max={53}  onChange$={(e, element) => {
            myTargetLocation.value = element.valueAsNumber
        }} /><br/>
        <label>다른 플레이어들의 도시</label><input type="number" valueAsNumber={0} min={0} max={53}  onChange$={(e, element) => {
            othersTargetLocation.value = element.valueAsNumber
        }} />
        <button disabled={disabled} onClick$={(e,element) => {
            socket?.emit("pickTargetsPair", {my: myTargetLocation.value, others: othersTargetLocation.value})
        }}>맞교환 수행</button>
    </div>
})