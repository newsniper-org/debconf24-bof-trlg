import { component$, useContext, useSignal } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";

type LottoChoiceType = "bothOdd" | "oddEven" | "bothEven"


export default component$(() => {
    const context = useContext(TRLGSocketContext)
    
    const {
        mainStatuses: {
            players,
            cashCache
        },
        nowPid,
        doubleLotto,
        lottoTriesCountCache
    } = context.gameContext.value

    const choice = useSignal<LottoChoiceType>("oddEven")

    const cash = cashCache ?? players[nowPid].cash
    
    const socket = context.socket.value

    return <div>
        <p>두배 찬스 : {(doubleLotto === true) ? "사용" : "미사용"}</p>
        <p>{lottoTriesCountCache === 0 ? "첫" : lottoTriesCountCache === 1 ? "두" : "세"}번째 도전?</p>
        <br/>
        <div>
            <input type="radio" id="bothOdd" name="lottoChoice" value="bothOdd"
                onChange$={(e,element) => {
                    if(element.checked) {
                        choice.value = "bothOdd"
                    }
                }}/><label>둘 다 홀수</label><br/>
            <input type="radio" id="oddEven" name="lottoChoice" value="oddEven" checked={true}
                onChange$={(e,element) => {
                    if(element.checked) {
                        choice.value = "oddEven"
                    }
                }}/><label>홀/짝 각각 하나씩</label><br/>
            <input type="radio" id="bothEven" name="lottoChoice" value="bothEven"
                onChange$={(e,element) => {
                    if(element.checked) {
                        choice.value = "bothEven"
                    }
                }}/><label>둘 다 짝수</label><br/>
        </div>
        <br/>
        <div>
            <button
                disabled={cash < 200000}
                onClick$={(e,element) => {
                    socket?.emit("tryLotto", {choice: choice.value})
                }}>
                도전!
            </button>
            <button
                disabled={lottoTriesCountCache === 0}
                onClick$={(e,element) => {
                    socket?.emitWithoutValue("stopLotto")
                }}>
                멈춰!
            </button>
        </div>
    </div>
})