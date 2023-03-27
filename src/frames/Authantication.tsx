import { useState } from "react"

export default function Auth() {
    const [Mode, setMode] = useState("Reg")

    const RegSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const [RegData, setRegData] = useState({
        email:"",
        name:"",
        password:"",
        repeat:""
    })

    var registration = (
        <form onSubmit={RegSubmit}>
            <input type="email" placeholder="email" onChange={(e) => {setRegData({...RegData, email:(e.target as HTMLInputElement).value})}} value={RegData.email} />
            <input type="text" placeholder="name" onChange={(e) => {setRegData({...RegData, name:(e.target as HTMLInputElement).value})}} value={RegData.name} />
            <input type="password" placeholder="password" onChange={(e) => {setRegData({...RegData, password:(e.target as HTMLInputElement).value})}} value={RegData.password} />
            <input type="password" placeholder="repeat password" onChange={(e) => {setRegData({...RegData, repeat:(e.target as HTMLInputElement).value})}} value={RegData.repeat} />
        </form>
    )

    var login = (
        <div>

        </div>
    )

    return (
        Mode == "login" ? login : registration
    )
}