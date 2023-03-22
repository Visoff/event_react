import { useContext, useEffect, useState } from "react"
import PopupContext from "../PopupContext"
import style from "./Dialog.module.css"

export default function Dialog() {
    const [Active, setActive] = useContext(PopupContext)
    const [st, setst] = useState(0)
    useEffect(() => {setst(st)}, [Active])
    return (
        <div className={style.container + (Active ? " "+style.active : "")}>
            <div className={style.background}></div>
        </div>
    )
}