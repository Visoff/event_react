import Header from "./components/Header"
import Dialog from "./components/Dialog"
import Home from "./frames/Home"
import Nav from "./components/Nav"

import style from "./App.module.css"
import { createContext, useContext, useState } from "react"
import PopupContext from "./PopupContext"

export default function App() {
    const [PopupActive, setPopupActive] = useState(false)
    return (
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
                <Dialog />
            </PopupContext.Provider>
        </div>
    )
}