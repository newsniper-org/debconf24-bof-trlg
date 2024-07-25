import { component$, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";


export interface LottoFinalResultNoticeProps {

}

export default component$<LottoFinalResultNoticeProps>(() => {
    const context = useContext(TRLGSocketContext)
    
    const {
        wonLotto,
        doubleLotto,
        lottoTriesCountCache
    } = context.gameContext.value
    const origEarned = (wonLotto !== null) ? ((wonLotto > 2) ? 2000000 : (wonLotto > 1) ? 1000000 : (wonLotto > 0) ? 500000 : 0) : 0

    return <div>
        {(doubleLotto !== null) && (wonLotto !== null) ? <>
            {(wonLotto > 0) ? <>
                <p>복불복 게임에서 이기신 것을 축하드립니다 {":)"}</p><br/>
                <p>도전 횟수 : {lottoTriesCountCache}</p>
                <p>획득 금액 : {doubleLotto ? `${origEarned * 2} (두배 찬스 사용)` : `${origEarned}`}</p>
            </> : <>
                <p>저런...복불복 게임에서 지셨습니다 {":("}</p><br/>
                <p>도전 횟수 : {lottoTriesCountCache}</p>
            </>}
        </> : <p></p>}
    </div>
})