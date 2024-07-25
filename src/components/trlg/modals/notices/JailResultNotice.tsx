import { component$, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";

export interface JailResultNoticeProps {

}

export default component$<JailResultNoticeProps>(() => {
    const context = useContext(TRLGSocketContext)

    const {
        jailTurnResultCache
    } = context.gameContext.value

    return <>
        {(jailTurnResultCache === "byLawyer") ? <p>
            변호사의 도움으로 석방되었습니다.
        </p> : (jailTurnResultCache === "byCash") ? <p>
            보석금을 내고 석방되었습니다.
        </p> : (jailTurnResultCache === "byDice") ? <p>
            운 좋게 석방되었습니다.
        </p> : (jailTurnResultCache === false) ? <p>
            저런...다음 기회를 노려보세요. {":("}
        </p> : <p></p>}
    </>
})