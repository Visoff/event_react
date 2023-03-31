import axios from "axios"
import { useContext, useEffect, useState } from "react"
import PopupContext from "../PopupContext"
import style from "./Dialog.module.css"

import Dialog_Team from "./Dialog_Team"

export default function Dialog({sellected}:{sellected:"first"|"select"|"find"|"create"}) {
    const [Active, setActive] = useContext(PopupContext)
    const [page, setPage] = useState(sellected)
    const [Teams, setTeams] = useState([])
    const [SearchTeams, setSearchTeams] = useState([])
    const [SelectedTeam, setSelectedTeam] = useState({id:0, name:"", members:0})
    useEffect(() => {
        axios.get(`https://api.visoff.ru/db/user/${localStorage.getItem("user_id")}/teams`).then(res => {
            setTeams(res.data)
        })
        axios.get(`https://api.visoff.ru/db/team/search`).then(res => {
            setSearchTeams(res.data)
        })
    }, [page, Active])

    var first = (
        <div className={style.main}>
            <h1>Рагистрация на хакатон</h1>
            <h2>Выберите команду</h2>
            <div className={style.list}>
                <button className={style.option} onClick={() => {setPage("select")}}>Выбрать свою</button>
                <button className={style.option} onClick={() => {setPage("find")}}>Найти новую</button>
                <button className={style.option} onClick={() => {setPage("create")}}>Создать новую</button>
                <button className={style.option} onClick={() => {/* some axios stuff */; setPage("first"); setActive(false)}}>Пойти без команды</button>
            </div>
        </div>
    )

    var select = (
        <div className={style.main}>
            <h1>Выбор команд из своих</h1>
            <div className={style.list}>
                {Teams.map((el:{id:number, name:string, members:number}) => {return <Dialog_Team onClick={(e) => {setSelectedTeam(el)}} className={el == SelectedTeam ? style.selected : ""} key={el.id} team={el} />})}
            </div>
            <div className={style.buttonsv1}>
                <div>
                    <button onClick={() => {axios.post(`https://api.visoff.ru/db/team/${SelectedTeam.id}/register/1`); setActive(false)}}>Выбрать</button>
                </div>
            </div>
        </div>
    )

    var find = (
        <div className={style.main}>
            <h1>Поиск команды</h1>
            <div className={style.list}>
                {SearchTeams.map((el:{id:number, name:string, members:number}) => {return <Dialog_Team onClick={(e) => {setSelectedTeam(el)}} className={el == SelectedTeam ? style.selected : ""} key={el.id} team={el} />})}
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
                page == 'select' ? select : 
                page == 'find' ? find :
                page == 'create' ? create :
                ""
            }
        </div>
    )
}