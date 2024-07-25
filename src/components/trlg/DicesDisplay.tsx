import { component$ } from "@builder.io/qwik";
import type { ChanceCardKindType, DiceType } from "@/lib/trlg/types";
import Dice from "./Dice";

export interface DicesDisplayProps {
    pair: [DiceType, DiceType] | null
}
export default component$<DicesDisplayProps>(({pair}) => {
    const [d1, d2] = pair ?? [null, null]
    return <div>
        <Dice value={d1} />
        <Dice value={d2} />
    </div>
})