import type { Session } from "@auth/core/types"

const _COMMAND_MODAL_STATES = [
    "jailModal",
    "lottoModal",
    "maintenanceSellModal",
    "preLottoModal",
    "purchaseModal",
    "sellModal",
    "rollDiceModal",
    "useTicketModal",
    "quirkOfFateModal",
    "greenNewDealModal",
    "trafficJamModal",
    "quickMoveModal",
    "extinctionModal",
    "tradeModal"
] as const
export type CommandModalStateType = typeof _COMMAND_MODAL_STATES[number]


const _NOTICE_MODAL_STATES = [
    "chanceKindNotice",
    "jailResultNotice",
    "lottoFinalResultNotice"
] as const
export type NoticeModalStateType = typeof _NOTICE_MODAL_STATES[number]

export type ModalStateType = CommandModalStateType | NoticeModalStateType | "frozen"


export interface ModalProps<M extends ModalStateType> {
    modalType: M
}


export function verifyCommandModalState(state: string): CommandModalStateType | null {
    for(const cms of _COMMAND_MODAL_STATES) {
        if(state === cms) {
            return cms
        }
    }
    return null
}


export function verifyNoticeModalState(state: string): NoticeModalStateType | null {
    for(const cms of _NOTICE_MODAL_STATES) {
        if(state === cms) {
            return cms
        }
    }
    return null
}

export interface WrappedViewProps {
    gameId: string
}