import { MouseEventHandler } from "react"
import style from "./Dialog.module.css"

interface Props {
    name?:string
    className?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>
}

export default function Team({name, className, onClick}:Props) {
    return (
        <button onClick={(onClick != undefined ? onClick : (e) => {})} className={style.team+(className != undefined ? " "+className : "")}>
            <p className={style.name}>{name}</p>
        </button>
    )
}