import { useContext, useEffect, useState } from "react"
import PopupContext from "../PopupContext"
import style from "./Dialog.module.css"

export default function Dialog() {
    const [Active, setActive] = useContext(PopupContext)
    return (
        <div className={style.container + (Active ? " "+style.active : "")}>
            <div className={style.main}>
                123456
            </div>
        </div>
    )
}