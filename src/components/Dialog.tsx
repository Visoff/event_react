import { useState } from "react"
import style from "./Dialog.module.css"

export default function Dialog() {
    const [Active, setActive] = useState(false)
    return (
        <div className={style.container + (Active ? " "+style.active : "")}>
            <div className={style.background}></div>
        </div>
    )
}