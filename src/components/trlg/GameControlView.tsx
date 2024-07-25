import { type Session } from "@auth/core/types";
import { component$, Slot, useContext } from "@builder.io/qwik";
import { TRLGSocketContext } from "@/context/socket/TRLGSocketContext";
import ModalSelector from "./ModalSelector";

export interface GameControlProps {
    session: Session
    gid: string
}

export default component$<GameControlProps>(({gid, session}) => {
    const context = useContext(TRLGSocketContext)
    const socket = context.socket.value
    if(session && session.user && session.user.email) {
        const accountEmail = session.user.email
        socket?.emit("grant", {gameId: gid, account: accountEmail})
    }
    return <div style={{background: "white", color: "black"}}>
        <ModalSelector/>
    </div>

})