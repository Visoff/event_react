import Header from "./components/Header"
import Dialog from "./components/Dialog"
import Home from "./frames/Home"
import Nav from "./components/Nav"

import style from "./App.module.css"
import { createContext, useContext, useState } from "react"
import PopupContext from "./PopupContext"
import Auth from "./frames/Authantication"

export default function App() {
    const [PopupActive, setPopupActive] = useState(false)
    var user_id = localStorage.getItem("user_id")
    var registered = (
        <div className={style.container}>
            <PopupContext.Provider value={[PopupActive, setPopupActive]}>
                <header>
                    <Header />
                </header>
                <main>
                    <Home />
                </main>
                <nav>
                    <Nav />
                </nav>
                <Dialog sellected="first" />
            </PopupContext.Provider>
        </div>
    )

    var registration = (
        <div className={style.container}>
            <Auth />
        </div>
    )

    return (
        user_id == null ? registration : registered
    )
}