import Header from "./components/Header"
import Dialog from "./components/Dialog"
import Home from "./frames/Home"

import style from "./App.module.css"

export default function App() {
    return (
        <div className={style.container}>
            <header>
                <Header />
            </header>
            <main>
                <Home />
            </main>
            <nav>789</nav>
            <Dialog />
        </div>
    )
}