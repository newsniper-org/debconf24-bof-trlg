import type { ElementEventPair, SalesType, SerializedGameContext } from "./types"

export type SerializedLandProperties = {
    [loc: number]: {
        operatorId: 0|1|2|3,
        amount: number
    }
}

export function getPlayerColor(operatorId: 0|1|2|3) {
    switch(operatorId) {
        case 0: return "#ff0000"
        case 1: return "#00ff00"
        case 2: return "#0000ff"
        case 3: return "#ffff00"
    }
}

export function updateButtons(...pairs: ElementEventPair<HTMLButtonElement>[]) {
    for(const [btn, onClick] of pairs) {
        const oldOnClick = btn.onclick
        if(oldOnClick !== null) {
            btn.removeEventListener("click",oldOnClick)
        }
        btn.addEventListener("click",onClick)
    }
}

export function getOwnerStyle(operatorId: 0|1|2|3) {
    return {fill: getPlayerColor(operatorId), fillOpacity:1}
}

const USE_TICKET_MODAL_DISPLAY: {
    [state: string]: string
} = {
    "cityFeeExemptionTicketModal": "사용료 면제",
    "industrialFeeExemptionTicketModal": "사용료 면제",
    "freeHospitalTicketModal": "긴급의료비 지원",
}

export function getUseTicketModalDisplay(state: string): string {
    if(state in USE_TICKET_MODAL_DISPLAY) {
        return USE_TICKET_MODAL_DISPLAY[state]
    } else {
        return ""
    }
}

export function* filterMyLandProps(locs: number[], lps: SerializedLandProperties, pid: 0|1|2|3) {
    for(const loc of locs) {
        if((loc in lps) && (lps[loc].operatorId === pid) && (Math.floor(lps[loc].amount) >= 1)) {
            yield [loc, {
                operatorId: pid,
                amount: Math.floor(lps[loc].amount)
            }] as [number, {operatorId: 0|1|2|3, amount: number}]
        }
    }
}


export function convertNumberMapToNumberDict<T>(m: Map<number, T>): {[key: number]: T} {
    let output: {[key: number]: T} = {}
    m.forEach((val, key) => {
        output[key] = val
    })
    return output
}

export function* convertSalesCommand(cmd: SalesType) {
    for(const [location, amount] of cmd) {
        yield {location, amount}
    }
}

export type RankType = 1|2|3|4

type Aug = [0|1|2|3,number]

function _getRanks(p0: number, p1: number, p2: number, p3: number): [RankType, RankType, RankType, RankType] {
    const preAugmented: [Aug, Aug, Aug, Aug] = [
        [0, p0],
        [1, p1],
        [2, p2],
        [3, p3]
    ]
    const preSorted: [Aug, Aug, Aug, Aug] = [...preAugmented.toSorted(([_a,a],[_b,b]) => b-a)] as [Aug, Aug, Aug, Aug]
    let postAugmented: [[0|1|2|3, number, RankType], [0|1|2|3, number, RankType], [0|1|2|3, number, RankType], [0|1|2|3, number, RankType]] = [
        [preSorted[0][0], preSorted[0][1], 1],
        [preSorted[1][0], preSorted[1][1], 2],
        [preSorted[2][0], preSorted[2][1], 3],
        [preSorted[3][0], preSorted[3][1], 4],
    ]
    const toCheck = [1,2,3] as const
    toCheck.forEach((idx) => {
        if(postAugmented[idx-1][1] === postAugmented[idx][1]) {
            postAugmented[idx][2] = postAugmented[idx-1][2]
        }
    })
    const cleanup: [[0|1|2|3, RankType], [0|1|2|3, RankType], [0|1|2|3, RankType], [0|1|2|3, RankType]] = [
        [postAugmented[0][0], postAugmented[0][2]],
        [postAugmented[1][0], postAugmented[1][2]],
        [postAugmented[2][0], postAugmented[2][2]],
        [postAugmented[3][0], postAugmented[3][2]]
    ]
    const postSorted: [[0|1|2|3, RankType], [0|1|2|3, RankType], [0|1|2|3, RankType], [0|1|2|3, RankType]] = cleanup.toSorted(([a, _a], [b, _b]) => a-b) as [[0|1|2|3, RankType], [0|1|2|3, RankType], [0|1|2|3, RankType], [0|1|2|3, RankType]]
    return [postSorted[0][1], postSorted[1][1], postSorted[2][1], postSorted[3][1]]
}


export function getRanks(context: SerializedGameContext): [RankType, RankType, RankType, RankType] {
    const {
        mainStatuses: { players, landProperties }
    } = context
    const allProperties = landProperties.locations.map((loc) => (landProperties.map[loc] !== undefined) ? landProperties.map[loc] : null).filter((item) => item !== null)
    const eachSum = [...([0,1,2,3] as const).map((pid) => {
        const builtSum = allProperties.filter(({operatorId}) => operatorId === pid).reduce((acc, {amount}) => acc+amount, 0)
        const sum = (builtSum * 300000) + players[pid].cash
        return sum
    })] as [number, number, number, number]
    const ranks = _getRanks(eachSum[0], eachSum[1], eachSum[2], eachSum[3])
    return ranks
}