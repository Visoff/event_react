import { useContext, useEffect, useState } from "react"
import PopupContext from "../PopupContext"
import style from "./Dialog.module.css"

import Dialog_Team from "./Dialog_Team"

export default function Dialog({sellected}:{sellected:string}) {
    const [Active, setActive] = useContext(PopupContext)
    const [page, setPage] = useState(sellected)
    if (!Active) {setPage("first")}
    var first = (
        <div className={style.main}>
            <h1>Выберите команду для участия</h1>
            <div className={style.list}></div>
            <div className={style.buttonsv1}>
                <div>
                    <button onClick={() => {setPage("find")}}>Найти команду</button>
                </div>
                <div>
                    <button onClick={() => {setPage("create")}}>Создать новую</button>
                    <button>Выбрать</button>
                </div>
            </div>
        </div>
    )

    var find = (
        <div className={style.main}>
            <h1>Поиск команды</h1>
            <div className={style.list}>
                <Dialog_Team />
            </div>
        </div>
    )

    var create = (
        <form className={style.main} onSubmit={(e) => {e.preventDefault();}}>
            <h1>Создание команды</h1>
        </form>
    )

    return (
        <div className={style.container + (Active ? " "+style.active : "")} onClick={(e) => {(e.target as HTMLElement).classList.contains(style.container) ? setActive(false) : ""}}>
            {
                page == "first" ? first : 
                page == 'find' ? find :
                page == 'create' ? create :
                ""
            }
        </div>
    )
}