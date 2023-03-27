import { useState } from "react"

export default function Auth() {
    const [Mode, setMode] = useState("Reg")

    const RegSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    var registration = (
        <form onSubmit={RegSubmit}>

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