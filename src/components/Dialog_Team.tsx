import { MouseEventHandler } from "react"
import style from "./Dialog.module.css"

interface Props {
    team?:{
        name:string,
        id:number,
        members:number
    }
    className?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>
}

export default function Team({team, className, onClick}:Props) {
    return (
        <button onClick={(onClick != undefined ? onClick : (e) => {})} className={style.team+(className != undefined ? " "+className : "")}>
            <p className={style.name}>{team?.name}</p>
            <p className={style.members}>{team?.members}</p>
        </button>
    )
}