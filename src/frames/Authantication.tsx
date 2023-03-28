import { useState } from "react"
import axios from "axios"

import style from "./Authantication.module.css"

export default function Auth() {
    const [Mode, setMode] = useState("Reg")

    const RegSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (RegData.password != RegData.repeat) {return;}
        axios.post("https://api.visoff.ru/db/user/register", {name:RegData.name, email:RegData.email, password:RegData.password}).then(() => {
            setMode("login")
        })
    }
    const [RegData, setRegData] = useState({
        email:"",
        name:"",
        password:"",
        repeat:""
    })

    var registration = (
        <form className={style.form} onSubmit={RegSubmit}>
            <input type="email" placeholder="email" onChange={(e) => {setRegData({...RegData, email:(e.target as HTMLInputElement).value})}} value={RegData.email} />
            <input type="text" placeholder="name" onChange={(e) => {setRegData({...RegData, name:(e.target as HTMLInputElement).value})}} value={RegData.name} />
            <input type="password" placeholder="password" onChange={(e) => {setRegData({...RegData, password:(e.target as HTMLInputElement).value})}} value={RegData.password} />
            <input type="password" placeholder="repeat password" onChange={(e) => {setRegData({...RegData, repeat:(e.target as HTMLInputElement).value})}} value={RegData.repeat} />
            <button>Зарегистрироваться</button>
            <button className={style.switch} type="button" onClick={(e) => {setMode("login")}}>Уже есть акаунт?</button>
        </form>
    )

    const LogSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const [LogData, setLogData] = useState({
        email:"",
        name:"",
        password:"",
        repeat:""
    })

    var login = (
        <form className={style.form} onSubmit={LogSubmit}>
            <input type="email" placeholder="email || name" onChange={(e) => {setLogData({...LogData, email:(e.target as HTMLInputElement).value})}} value={LogData.email} />
            <input type="password" placeholder="password" onChange={(e) => {setLogData({...LogData, password:(e.target as HTMLInputElement).value})}} value={LogData.password} />
            <button>Войти</button>
            <button className={style.switch} type="button" onClick={(e) => {setMode("reg")}}>Ещё нет акаунта?</button>
        </form>
    )

    return (
        Mode == "login" ? login : registration
    )
}