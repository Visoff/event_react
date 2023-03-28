import axios from "axios"
import { useContext, useEffect, useState } from "react"
import PopupContext from "../PopupContext"
import style from "./Dialog.module.css"

import Dialog_Team from "./Dialog_Team"

export default function Dialog({sellected}:{sellected:string}) {
    const [Active, setActive] = useContext(PopupContext)
    const [page, setPage] = useState(sellected)
    const [Teams, setTeams] = useState([])
    const [SearchTeams, setSearchTeams] = useState([])
    const [SelectedTeam, setSelectedTeam] = useState({id:0, name:""})
    useEffect(() => {
        axios.get(`https://api.visoff.ru/db/user/${localStorage.getItem("user_id")}/teams`).then(res => {
            setTeams(res.data)
            console.log(res.data)
        })
        axios.get(`https://api.visoff.ru/db/team/search`).then(res => {
            setSearchTeams(res.data)
            console.log(res.data)
        })
    }, [])
    var first = (
        <div className={style.main}>
            <h1>Выберите команду для участия</h1>
            <div className={style.list}>
                {Teams.map((el:{id:number, name:string}) => {return <Dialog_Team onClick={(e) => {setSelectedTeam(el)}} className={el == SelectedTeam ? style.selected : ""} key={el.id} name={el.name} />})}
            </div>
            <div className={style.buttonsv1}>
                <div>
                    <button onClick={() => {setPage("find")}}>Найти команду</button>
                </div>
                <div>
                    <button onClick={() => {setPage("create")}}>Создать новую</button>
                    <button onClick={() => {axios.post(`https://api.visoff.ru/db/team/${SelectedTeam.id}/register/1`); setActive(false)}}>Выбрать</button>
                </div>
            </div>
        </div>
    )

    var find = (
        <div className={style.main}>
            <h1>Поиск команды</h1>
            <div className={style.list}>
                {SearchTeams.map((el:{id:number, name:string}) => {return <Dialog_Team onClick={(e) => {setSelectedTeam(el)}} className={el == SelectedTeam ? style.selected : ""} key={el.id} name={el.name} />})}
            </div>
            <div className={style.buttonsv1}>
                <div>
                    <button onClick={() => {axios.post(`https://api.visoff.ru/db/user/${localStorage.getItem("user_id")}/register/${SelectedTeam.id}`); setPage("first")}}>Вступить</button>
                </div>
            </div>
        </div>
    )

    const [createData, setCreateData] = useState({
        name:""
    })
    const createSubmitEvent = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.post("https://api.visoff.ru/db/team/register", {name:createData.name})
        setPage("first")
    }
    var create = (
        <form className={style.main} onSubmit={createSubmitEvent}>
            <h1>Создание команды</h1>
            <div className={style.list}>
                <input type="text" placeholder="Название" value={createData.name} onInput={(e) => {setCreateData({...createData, name:(e.target as HTMLInputElement).value});}} />
            </div>
            <div className={style.buttonsv1}>
                <div>
                    <button>Создать</button>
                </div>
            </div>
        </form>
    )

    return (
        <div className={style.container + (Active ? " "+style.active : "")} onClick={(e) => {(e.target as HTMLElement).classList.contains(style.container) ? (() => {setPage("first"); setActive(false)})() : ""}}>
            {
                page == "first" ? first : 
                page == 'find' ? find :
                page == 'create' ? create :
                ""
            }
        </div>
    )
}