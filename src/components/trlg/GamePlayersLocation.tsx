import { component$, useSignal } from "@builder.io/qwik";

export interface GamePlayersLocationProps {
    p0: number
    p1: number
    p2: number
    p3: number
}

export const GamePlayersLocation = component$<GamePlayersLocationProps>(({p0,p1,p2,p3}) => {
    return (<>
       <g id="playerLoc0" transform="rotate(-30,658.33962,748.37522)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3482-9"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 0) ? "visible" : "hidden" }/>
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3484-79"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p2 === 0) ? "visible" : "hidden" }/>
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3486-6"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 0) ? "visible" : "hidden" }/>
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="path1818-7"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 0) ? "visible" : "hidden" }/>
        </g>
        <g id="playerLoc1">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3482"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 1) ? "visible" : "hidden" }/>
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3484"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p2 === 1) ? "visible" : "hidden" }/>
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3486"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 1) ? "visible" : "hidden" }/>
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="path1818"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 1) ? "visible" : "hidden" }/>
        </g>
        <g id="playerLoc2"
            transform="translate(-50.000028,1.7171875e-5)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3482-8"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 2) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3484-7"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 2) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3486-9"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 2) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="path1818-1"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 2) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc3"
            transform="translate(-100.00003,1.7171875e-5)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3743"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 3) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3745"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 3) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3747"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 3) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3741"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 3) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc4"
            transform="translate(-150.00003,3.3015625e-5)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3743-7"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 4) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3745-9"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 4) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3747-1"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 4) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3741-1"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 4) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc5"
            transform="translate(-200.00006)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3743-2"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 5) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3745-3"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 5) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3747-9"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 5) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3741-16"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 5) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc6"
            transform="translate(-250.00006)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4075"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 6) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4077"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 6) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4079"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 6) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4081"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 6) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc7"
            transform="translate(-300.00006)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4087"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 7) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4089"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 7) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4091"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 7) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4093"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 7) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc8"
            transform="translate(-350.00006)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4099"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 8) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4101"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 8) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4103"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 8) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4105"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 8) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc9"
            transform="rotate(30,495.83051,95.280749)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3482-9-9"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 9) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3484-79-5"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 9) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3486-6-2"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 9) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="path1818-7-3"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 9) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc10"
            transform="rotate(60,489.58699,443.60003)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4111"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 10) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4113"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 10) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4115"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 10) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4117"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 10) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc11"
            transform="rotate(60,514.58872,400.29319)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4123"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 11) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4125"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 11) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4127"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 11) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4129"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 11) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc12"
            transform="rotate(60,539.58477,356.99621)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4135"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 12) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4137"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 12) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4139"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 12) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4141"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 12) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc13"
            transform="rotate(60,564.58651,313.68938)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4147"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 13) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4149"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 13) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4151"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 13) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4153"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 13) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc14"
            transform="rotate(60,589.59122,270.39741)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4159"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 14) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4161"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 14) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4163"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 14) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4165"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 14) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc15"
            transform="rotate(60,614.59295,227.09058)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4171"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 15) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4173"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 15) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4175"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 15) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4177"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 15) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc16"
            transform="rotate(60,639.59297,183.78929)"
            style="display:inline">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4183"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 16) ? "visible" : "hidden" }/>
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4185"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p2 === 16) ? "visible" : "hidden" }/>
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4187"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 16) ? "visible" : "hidden" }/>
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4189"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 16) ? "visible" : "hidden" }/>
        </g>
        <g id="playerLoc17"
            transform="rotate(60,664.58795,140.49171)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4195"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 17) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4197"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 17) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4199"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 17) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4201"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 17) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc18"
            transform="rotate(90,555.32017,334.31931)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3482-9-9-7"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 18) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3484-79-5-5"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 18) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3486-6-2-0"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 18) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="path1818-7-3-1"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 18) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc19"
            transform="rotate(120,489.59095,443.59061)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4099-0"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 19) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4101-8"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 19) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4103-6"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 19) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4105-1"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 19) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc20"
            transform="rotate(120,514.59311,429.15481)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4287"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 20) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4289"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 20) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4291"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 20) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4293"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 20) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc21"
            transform="rotate(120,539.58877,414.72438)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4299"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 21) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4301"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 21) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4303"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 21) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4305"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 21) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc22"
            transform="rotate(120,564.59092,400.28857)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5232"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 22) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5234"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 22) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5236"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 22) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5238"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 22) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc23"
            transform="rotate(120,589.5945,385.85609)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5244"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 23) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5246"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 23) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5248"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 23) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5250"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 23) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc24"
            transform="rotate(120,614.59235,371.42439)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5256"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 24) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5258"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 24) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5260"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 24) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5262"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 24) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc25"
            transform="rotate(120,639.59125,356.99127)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5268"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 25) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5270"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 25) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5272"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 25) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5274"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 25) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc26"
            transform="rotate(120,664.59015,342.55814)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5280"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 26) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5282"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 26) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5284"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 26) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5286"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 26) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc27"
            transform="rotate(150,571.25816,398.37747)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3482-9-9-7-7"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 27) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3484-79-5-5-3"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 27) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3486-6-2-0-0"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 27) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="path1818-7-3-1-8"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 27) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc28"
            transform="rotate(180,489.59501,443.59)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3482-4"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 28) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3484-72"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 28) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3486-4"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 28) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="path1818-2"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 28) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc29"
            transform="rotate(180,514.59503,443.58999)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3482-8-2"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 29) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3484-7-8"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 29) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3486-9-5"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 29) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="path1818-1-2"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 29) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc30"
            transform="rotate(180,539.59503,443.58999)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3743-28"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 30) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3745-7"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 30) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3747-3"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 30) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3741-11"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 30) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc31"
            transform="rotate(180,564.59503,443.58999)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3743-7-0"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 31) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3745-9-4"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 31) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3747-1-3"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 31) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3741-1-4"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 31) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc32"
            transform="rotate(180,589.59504,443.59)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3743-2-6"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 32) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3745-3-8"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 32) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3747-9-3"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 32) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3741-16-9"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 32) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc33"
            transform="rotate(180,614.59504,443.59)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4075-0"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 33) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4077-7"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 33) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4079-2"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 33) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4081-7"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 33) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc34"
            transform="rotate(180,639.59504,443.59)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4087-2"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 34) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4089-0"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 34) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4091-9"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 34) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4093-1"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 34) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc35"
            transform="rotate(180,664.59504,443.59)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4099-9"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 35) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4101-1"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 35) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4103-3"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 35) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4105-0"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 35) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc36"
            transform="rotate(-150,582.92418,445.26078)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3482-9-9-7-7-4"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 36) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3484-79-5-5-3-5"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 36) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3486-6-2-0-0-7"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 36) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="path1818-7-3-1-8-5"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 36) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc37"
            transform="rotate(-120,489.58922,443.58537)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4111-5"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 37) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4113-2"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 37) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4115-5"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 37) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4117-0"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 37) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc38"
            transform="rotate(-120,514.59244,458.02012)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4123-3"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 38) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4125-4"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 38) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4127-7"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 38) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4129-9"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 38) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc39"
            transform="rotate(-120,539.58996,472.4516)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4135-0"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 39) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4137-2"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 39) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4139-3"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 39) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4141-3"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 39) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc40"
            transform="rotate(-120,564.59317,486.88636)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4147-8"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 40) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4149-4"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 40) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4151-8"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 40) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4153-8"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 40) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc41"
            transform="rotate(-120,589.5878,501.32284)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4159-8"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 41) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4161-9"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 41) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4163-0"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 41) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4165-4"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 41) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc42"
            transform="rotate(-120,614.59101,515.75759)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4171-3"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 42) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4173-6"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 42) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4175-2"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 42) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4177-3"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 42) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc43"
            transform="rotate(-120,639.50471,530.34402)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4183-2"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 43) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4185-1"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 43) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4187-8"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 43) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4189-5"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 43) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc44"
            transform="rotate(-120,664.58889,544.62222)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4195-6"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 44) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4197-3"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 44) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4199-7"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 44) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4201-7"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 44) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc45"
            transform="rotate(-90,598.86118,509.31967)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3482-9-9-7-7-4-0"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 45) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3484-79-5-5-3-5-3"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 45) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse3486-6-2-0-0-7-2"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 45) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="path1818-7-3-1-8-5-2"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 45) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc46"
            transform="rotate(-60,489.59396,443.58295)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4099-0-2"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 46) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4101-8-4"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 46) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4103-6-8"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 46) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4105-1-5"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 46) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc47"
            transform="rotate(-60,514.59749,486.88796)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4287-8"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 47) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4289-1"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 47) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4291-6"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 47) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4293-1"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 47) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc48"
            transform="rotate(-60,539.59173,530.18172)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4299-5"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 48) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4301-6"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 48) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4303-4"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 48) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse4305-0"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 48) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc49"
            transform="rotate(-60,564.59529,573.48671)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5232-3"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 49) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5234-3"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 49) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5236-6"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 49) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5238-8"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 49) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc50"
            transform="rotate(-60,589.59308,616.79418)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5244-5"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 50) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5246-6"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 50) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5248-5"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 50) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5250-3"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 50) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc51"
            transform="rotate(-60,614.58952,660.09173)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5256-7"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 51) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5258-1"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 51) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5260-1"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 51) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5262-9"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 51) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc52"
            transform="rotate(-60,639.58841,703.39109)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5268-7"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 52) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5270-8"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 52) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5272-4"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 52) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5274-4"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 52) ? "visible" : "hidden" } />
        </g>
        <g id="playerLoc53"
            transform="rotate(-60,664.58733,746.69046)">
            <ellipse
            style="fill:#ffff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5280-8"
            cx="670.98572"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581" visibility={(p3 === 53) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#0000ff;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5282-9"
            cx="658.19434"
            cy="857.65442"
            rx="5.6457214"
            ry="5.5544581"  visibility={(p2 === 53) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#00ff00;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5284-4"
            cx="670.98572"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p1 === 53) ? "visible" : "hidden" } />
            <ellipse
            style="fill:#ff0000;fill-opacity:1;stroke-width:1.24485;stroke-linejoin:round;stroke-dasharray:2.48972, 2.48972"
            id="ellipse5286-3"
            cx="658.19434"
            cy="845.04553"
            rx="5.6457214"
            ry="5.5544581" visibility={(p0 === 53) ? "visible" : "hidden" } />
        </g> 
    </>)
})