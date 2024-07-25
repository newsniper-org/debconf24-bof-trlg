import { component$, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";
import { _CITY_GROUPS, BUILDABLE_LOCATIONS, type CityGroupType } from "@/lib/trlg/types";



export default component$(() => {
    const context = useContext(TRLGSocketContext)
    const socket = context.socket.value

    const {
        mainStatuses: { landProperties },
        nowPid,
    } = context.gameContext.value


    const targetGroup = useSignal<CityGroupType>(0)

    const targets = _CITY_GROUPS[targetGroup.value]
    const amountSum = targets.map((target) => {
        if(landProperties.locations.includes(target)) {
            return landProperties.map[target].amount
        } else {
            return 0
        }
    }).reduce((sum, amount) => sum + amount,0)
    
    
    
    
    const disabled = !(amountSum > 0)

    return <div>
        <input type="number" valueAsNumber={0} min={0} max={11} step={1} onChange$={(e, element) => {
            targetGroup.value = Math.max(0,Math.min(11, element.valueAsNumber)) as CityGroupType
        }} /><br/>
        <button disabled={disabled} onClick$={(e,element) => {
            socket?.emit("pickTargetGroup", {targetGroup: targetGroup.value})
        }}>증축공사 시행</button>
    </div>
})