import { useContext, useEffect, useState } from "react"
import PopupContext from "../PopupContext"
import style from "./Dialog.module.css"

export default function Dialog() {
    const [Active, setActive] = useContext(PopupContext)
    useEffect(() => {}, [Active])
    return (
        <div className={style.container + (Active ? " "+style.active : "")}>
            <div className={style.background}></div>
        </div>
    )
}