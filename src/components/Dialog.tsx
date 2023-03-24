import { useContext, useEffect, useState } from "react"
import PopupContext from "../PopupContext"
import style from "./Dialog.module.css"

export default function Dialog({sellected}:{sellected:string}) {
    const [Active, setActive] = useContext(PopupContext)
    var first = (
        <div className={style.main}>
            <h1>Выберите команду для участия</h1>
            <div className={style.list}></div>
            <div className={style.buttonsv1}>
                <div>
                    <button>Найти команду</button>
                </div>
                <div>
                    <button>Создать новую</button>
                    <button>Выбрать</button>
                </div>
            </div>
        </div>
    )

    return (
        <div className={style.container + (Active ? " "+style.active : "")} onClick={(e) => {(e.target as HTMLElement).classList.contains(style.container) ? setActive(false) : ""}}>
            {first}
        </div>
    )
}