import type { ChanceCardKindType } from "./types";

export const CHANCE_CARD_DISPLAY_CONTENTS: {
    [key in ChanceCardKindType]: {
        head: string,
        exerpt: string[],
        detail: string[],
        additional?: string[]
    }
} = {
    "newborn": {
        head: "출산을 축하합니다.",
        exerpt: ["축하합니다."],
        detail: ["출산 축하금 100만을 받습니다. (시장)"]
    },
    "earthquake": {
        head: "지진",
        exerpt: ["지진이 발생했습니다."],
        detail: ["자신의 집이 있는 모든 도시에 집 한채씩 파괴됩니다."]
    },
    "taxHeaven": {
        head: "조세 회피처",
        exerpt: ["어두운 금융 거래가 드러났습니다."],
        detail: ["즉시 수감됩니다."],
        additional: ["출발점을 지나지 않습니다. (바퀴 수는 그대로)"]
    },
    "disease": {
        head: "병원행",
        exerpt: ["건강에 이상 신호가 생겼습니다."],
        detail: ["치료를 위해 병원을 방문하십시오."],
        additional: ["출발점을 지나지 않습니다. (바퀴 수는 그대로)"]
    },
    "emergencyAid": {
        head: "[티켓] 긴급의료비 지원",
        exerpt: ["긴급의료비가 지급되었습니다."],
        detail: ["병원 방문 시 1회 무료로 치료받을 수 있습니다."]
    },
    "drug": {
        head: "마약 소지",
        exerpt: ["마약류를 가지고 있는 것으로 밝혀졌습니다."],
        detail: ["즉시 수감됩니다."],
        additional: ["출발점을 지나지 않습니다. (바퀴 수는 그대로)"]
    },
    "nursing": {
        head: "부모님 간호",
        exerpt: ["부모님께서 병원에 입원하셨습니다."],
        detail: ["병원으로 이동합니다."],
        additional: ["출발점을 지나지 않습니다. (바퀴 수는 그대로)"]
    },
    "inheritGet": {
        head: "유산 상속",
        exerpt: ["유산을 상속받았습니다."],
        detail: ["100만원을 얻습니다."]
    },
    "healthy": {
        head: "[티켓...?] 건강한 식습관",
        exerpt: ["건강한 식단으로", "건강을 유지하고 있습니다."],
        detail: ["병원 방문 시 1회 무료로 치료받을 수 있습니다."]
    },
    "typhoon": {
        head: "태풍",
        exerpt: ["기후 위기로 인해", "태풍이 발생했습니다."],
        detail: ["해안 도시들에 있는", "집(들)이 한 채씩 파괴됩니다."],
        additional: ["해안 도시 : 목포, 강릉, 포항, 창원, 서산,", "순천, 울산, 여수, 인천, 제주, 부산"]
    },
    "scholarship": {
        head: "장학금",
        exerpt: ["장학금이 지급되었습니다."],
        detail: ["대학으로 이동합니다.", "(1회 방문 : 입학 / 2회 방문 : 졸업)"],
        additional: ["출발점을 지나지 않습니다. (바퀴 수는 그대로)"]
    },
    "feeExemption": {
        head: "[티켓] 사용료 면제",
        exerpt: ["토지 및 집 사용료를 면제받습니다."],
        detail: ["1장 당 1회씩 사용료 100% 면제받을 수 있습니다."]
    },
    "bonus": {
        head: "상장 보너스 지급",
        exerpt: ["회사가 유가증권시장에 상장되었습니다."],
        detail: ["이대로 출발점을 지나면 2배의 급여를 받습니다."]
    },
    "doubleLotto": {
        head: "[티켓] 더블 로또",
        exerpt: ["더블 로또 티켓이 발급되었습니다."],
        detail: ["로또에서 사용하면,", "성공 시 상금을 2배로 받을 수 있습니다."]
    },
    "insiderTrading": {
        head: "내부자 거래",
        exerpt: ["특권금융정보를 공유한 것이 드러났습니다!"],
        detail: ["즉시 수감됩니다."],
        additional: ["출발점을 지나지 않습니다. (바퀴 수는 그대로)"]
    },
    "taxExemption": {
        head: "공과금 면제",
        exerpt: ["공과금을 면제받습니다."],
        detail: ["이대로 출발점을 지나면", "물, 전기, 가스 등 공과금 전액을 1회 면제받습니다."]
    },
    "tooMuchElectricity": {
        head: "튀는 전기요금",
        exerpt: ["전기를 초과 사용하였습니다."],
        detail: ["전력 회사로 이동해 사용료를 지불합니다."],
        additional: ["출발점을 지나지 않습니다. (바퀴 수는 그대로)"]
    },
    "lawyersHelp": {
        head: "[티켓] 변호사 선임",
        exerpt: ["당신을 변호해줄 변호사를 선임합니다."],
        detail: ["즉시 감옥에서 석방될 수 있습니다."]
    },
    "soaringStockPrice": {
        head: "주가 폭등",
        exerpt: ["보유한 주식의 움직임이 심상치 않습니다."],
        detail: ["보유한 현금의 절반을 시장에서 받습니다."],
        additional: ["해당 금액의 끝자리가 5만일 경우에는 반올림합니다."]
    },
    "plungeInStockPrice": {
        head: "주가 폭락",
        exerpt: ["보유한 주식의 움직임이 심상치 않습니다."],
        detail: ["보유한 현금의 절반을 잃습니다."],
        additional: ["해당 금액의 끝자리가 5만일 경우에는 반올림합니다."]
    },
    "studyingHard": {
        head: "주경야독",
        exerpt: ["밤잠을 쪼개가며 열심히 일하고 공부해", "학위 취득에 성공하였습니다."],
        detail: ["대학을 즉시 졸업합니다."]
    },
    "maintenance": {
        head: "건물 유지보수",
        exerpt: ["건물주는 자신의 건물을", "관리할 책임이 있습니다."],
        detail: ["건물 한 채당 관리비 10만을 시장에 지불하십시오."],
        additional: ["예) 소유한 건물이 5채일 경우 50만을 지불합니다."]
    },
    "inheritDonate": {
        head: "유산 기부",
        exerpt: ["어려운 이웃을 위해 후원합니다."],
        detail: ["100만원을 시장에 지불합니다."]
    },
    "cyberSecurityThreat": {
        head: "사이버 범죄",
        exerpt: ["사이버 범죄가 증가하고 있으며,", "당신의 온라인 계정이 도용되었습니다. :("],
        detail: ["대응 조치에 필요한 비용으로", "100만을 시장에 지불합니다."]
    },
    "fakeNews": {
        head: "기레기 전성시대",
        exerpt: ["당신에 관한 가짜뉴스가", "만들어지고 있습니다."],
        detail: ["변호사와 PR 담당자에게 비용을 지불하십시오.", "(총 100만을 시장에 지불)"]
    },
    "voicePhishing": {
        head: "보이스피싱",
        exerpt: ["보이스피싱 사기 피해를 당했습니다."],
        detail: ["100만을 잃습니다."]
    },
    "trafficAccident": {
        head: "교통사고",
        exerpt: ["교통사고가 발생했습니다."],
        detail: ["수리비로 50만원을 시장에 지불합니다."]
    },
    "catastrophe": {
        head: "긴급재난 발생",
        exerpt: ["대도시들에 긴급재난이 발생했습니다."],
        detail: ["플레이어 순번을 한 주기 진행할 동안", "해당 지역들의 사용료가 면제됩니다."],
        additional: ["대도시 : 서울, 부산, 인천, 대구, 대전,", "광주, 울산, 창원, 고양, 수원"]
    },
    "pandemic": {
        head: "팬데믹(전염병 대유행)",
        exerpt: ["팬데믹으로 인해 경기가 침체되고 있습니다."],
        detail: ["플레이어 순번을 한 주기 진행할 동안", "모든 사용료(토지, 집, 서비스)들이 면제됩니다."]
    },
    "quirkOfFate": {
        head: "왕자와 거지",
        exerpt: ["운명의 장난!", "주사위를 굴리십시오."],
        detail: ["나온 숫자만큼 시계 방향에 있는 참가자와", "모든 현금과 건물들을 교환합니다."],
        additional: ["자신이 나오면 아무 일도 일어나지 않습니다."]
    },
    "greenNewDeal": {
        head: "그린뉴딜",
        exerpt: ["친환경 에너지 사용으로 거주환경이 개선되어,", "사람들이 몰리고 있습니다."],
        detail: ["자신의 집이 지어진 도시 한 곳에", "무료로 집을 1채 더 짓습니다."]
    },
    "trafficJam": {
        head: "교통체증",
        exerpt: ["도시의 교통체증이 심각하여", "거주환경이 나빠지고 있습니다."],
        detail: ["자신 외 다른 플레이어의 도시들 중", "한 곳을 골라 그 곳의 집 한 채를 철거합니다."]
    },
    "quickMove": {
        head: "택시 호출",
        exerpt: ["어디로든 즉시 이동합니다."],
        detail: ["원하는 곳으로 이동합니다."],
        additional: ["출발점을 지날 경우 임금을 받습니다."]
    },
    "extinction": {
        head: "지방소멸",
        exerpt: ["초저출산으로 인구가 급격히 감소하고 있습니다."],
        detail: ["한 색깔의 도시들을 선택하여,", "해당 색깔의 모든 도시에 있는 집을 1채 씩 없앱니다"]
    },
    "trade": {
        head: "건물 교환",
        exerpt: ["건물을 교환할 기회가 생겼습니다."],
        detail: ["자신의 도시 1개와", "다른 플레이어의 원하는 도시 1개를 선택하여,", "그 둘의 건물들을 서로 맞교환합니다."]
    },
}