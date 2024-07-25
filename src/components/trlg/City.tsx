import { component$, useSignal } from "@builder.io/qwik";
import { getOwnerStyle } from "@/lib/trlg/component-utils";

export const City = component$<{status: {amount: number, operatorId: 0|1|2|3}, transform?: string}>(({status: {amount, operatorId}, transform}) => {
    return (<g style={getOwnerStyle(operatorId)} transform={transform}>
        <rect
            style="stroke-width:1.53359;stroke-linejoin:round;stroke-dasharray:3.0672, 3.0672"
            width="10.30269"
            height="10.30269"
            x="624.74139"
            y="794.77301" visibility={(amount >= 3 ? "visible" : "hidden")}/>
        <rect
            style="stroke-width:1.53359;stroke-linejoin:round;stroke-dasharray:3.0672, 3.0672"
            width="10.30269"
            height="10.30269"
            x="609.43872"
            y="794.77301" visibility={(amount >= 2 ? "visible" : "hidden")}/>
        <rect
            style="stroke-width:1.53359;stroke-linejoin:round;stroke-dasharray:3.0672, 3.0672"
            width="10.30269"
            height="10.30269"
            x="594.13599"
            y="794.77301" visibility={(amount >= 1 ? "visible" : "hidden")}/>
    </g>)
})