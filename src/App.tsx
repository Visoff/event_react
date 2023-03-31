import Header from "./components/Header"
import Dialog from "./components/Dialog"
import Home from "./frames/Home"
import Nav from "./components/Nav"

import style from "./App.module.css"
import { createContext, useContext, useState } from "react"
import PopupContext from "./PopupContext"
import Auth from "./frames/Authantication"
import Teams from "./frames/Teams"

export default function App() {
    const [PopupActive, setPopupActive] = useState(false)
    const [Frame, setFrame] = useState("Home")
    var user_id = localStorage.getItem("user_id")
    var registered = (
        <div className={style.container}>
            <PopupContext.Provider value={[PopupActive, setPopupActive]}>
                <header>
                    <Header />
                </header>
                <main>
                    {
                        Frame == "Home" ? <Home /> :
                        Frame == "Teams" ? <Teams /> : ""
                    }
                </main>
                <nav>
                    <Nav FrameState={[Frame, setFrame]} />
                </nav>
                <Dialog sellected="first" />
            </PopupContext.Provider>
        </div>
    )

    var registration = (
        <div className={style.container}>
            <main>
                <Auth />
            </main>
        </div>
    )

    return (
        user_id == null ? registration : registered
    )
}