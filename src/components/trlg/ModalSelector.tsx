import { component$, Slot, useContext, useSignal, type Component } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";
import { verifyCommandModalState, verifyNoticeModalState, type CommandModalStateType, type NoticeModalStateType } from "@/lib/trlg/component-types";
import CommandModalContainer from "./modals/containers/CommandModalContainer";
import NoticeModalContainer from "./modals/containers/NoticeModalContainer";
import JailModal from "./modals/commands/JailModal";
import LottoModal from "./modals/commands/LottoModal";
import PreLottoModal from "./modals/commands/PreLottoModal";
import MaintenanceSellModal from "./modals/commands/MaintenanceSellModal";
import PurchaseModal from "./modals/commands/PurchaseModal";
import RollDiceModal from "./modals/commands/RollDiceModal";
import SellModal from "./modals/commands/SellModal";
import UseTicketModal from "./modals/commands/UseTicketModal";
import GreenNewDealModal from "./modals/commands/GreenNewDealModal";
import ExtinctionModal from "./modals/commands/ExtinctionModal";
import QuirkOfFateModal from "./modals/commands/QuirkOfFateModal";
import TrafficJamModal from "./modals/commands/TrafficJamModal";
import QuickMoveModal from "./modals/commands/QuickMoveModal";
import TradeModal from "./modals/commands/TradeModal";
import LottoFinalResultNotice from "./modals/notices/LottoFinalResultNotice";
import JailResultNotice from "./modals/notices/JailResultNotice";
import ChanceKindNotice from "./modals/notices/ChanceKindNotice";
import { getRanks, type RankType } from "@/lib/trlg/component-utils";

function getCommandModal(state: CommandModalStateType): Component<unknown> {
    switch (state) {
        case "extinctionModal":
            return ExtinctionModal
        case "greenNewDealModal":
            return GreenNewDealModal
        case "jailModal":
            return JailModal
        case "lottoModal":
            return LottoModal
        case "preLottoModal":
            return PreLottoModal
        case "maintenanceSellModal":
            return MaintenanceSellModal
        case "purchaseModal":
            return PurchaseModal
        case "quickMoveModal":
            return QuickMoveModal
        case "quirkOfFateModal":
            return QuirkOfFateModal
        case "rollDiceModal":
            return RollDiceModal
        case "sellModal":
            return SellModal
        case "tradeModal":
            return TradeModal
        case "trafficJamModal":
            return TrafficJamModal
        case "useTicketModal":
            return UseTicketModal
    }
}

function getNoticeModal(state: NoticeModalStateType): Component<unknown> {
    switch(state) {
        case "chanceKindNotice":
            return ChanceKindNotice
        case "jailResultNotice":
            return JailResultNotice
        case "lottoFinalResultNotice":
            return LottoFinalResultNotice
    }
}

function decorateRank(rank: RankType) {
    switch(rank) {
        case 1:
            return "1st"
        case 2:
            return "2nd"
        case 3:
            return "3rd"
        case 4:
            return "4th"
    }
}


export default component$(() => {
    const context = useContext(TRLGSocketContext)
    const state = context.state.value

    const cmdState = verifyCommandModalState(state)
    const noticeState = verifyNoticeModalState(state)

    if(cmdState !== null) {
        const Fit = getCommandModal(cmdState)
        return <CommandModalContainer>
            <Fit q:slot="fit"/>
            <div q:slot="notFit">
                당신의 턴이 아닙니다.
            </div>
        </CommandModalContainer>
    } else if (noticeState !== null) {
        const Notice = getNoticeModal(noticeState)
        return <NoticeModalContainer>
            <Notice/>
        </NoticeModalContainer>
    } else if (state === "frozen") {
        const gc = context.gameContext.value
        if(gc.ending === "hasWinner") {
            const ranks = getRanks(context.gameContext.value)
            return <div>
                <p>player 0: {decorateRank(ranks[0])}</p>
                <p>player 1: {decorateRank(ranks[1])}</p>
                <p>player 2: {decorateRank(ranks[2])}</p>
                <p>player 3: {decorateRank(ranks[3])}</p>
            </div>
        } else {
            <div>
                All the players lost the game {"X("}
            </div>
        }
    } else {
        return <></>
    }
})