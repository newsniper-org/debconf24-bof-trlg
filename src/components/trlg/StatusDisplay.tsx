import { component$ } from "@builder.io/qwik";
import type { ChanceCardKindType, SerializedGameContext } from "@/lib/trlg/types";
import ChanceCardDisplay from "./ChanceCardDisplay";
import DicesDisplay from "./DicesDisplay";
import { getPlayerColor } from "@/lib/trlg/component-utils";

export interface StatusDisplayProps {
    gameContext: SerializedGameContext,
    nowPlayerAccount: string,
    isOnline: boolean
}
export default component$<StatusDisplayProps>(({gameContext, nowPlayerAccount, isOnline}) => {
    const {
        nowPid,
        dicesNow,
        remainingSidecars: {
            catastrophe,
            pandemic
        },
        freshChanceCardCache,
        turns
    } = gameContext

    return <div style={{display: "inline-block", verticalAlign: "middle"}}>
        <p>턴 수 : {isOnline && `${turns}`}</p>
        {isOnline ? <p style={{color: getPlayerColor(nowPid)}}>
            현재 턴 플레이어 : {nowPlayerAccount}
        </p> : <p>
            현재 턴 플레이어 : 
        </p>}
        <br/>
        <p>남은 긴급재난 턴 수 : {isOnline && `${catastrophe}`}</p>
        <p>남은 팬데믹 턴 수 : {isOnline && `${pandemic}`}</p>
        <br/>
        <ChanceCardDisplay chanceKind={freshChanceCardCache}/>
        <br/>
        <DicesDisplay pair={dicesNow}/>
        <br/>
    </div>
})