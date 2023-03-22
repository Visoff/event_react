import Header from "./components/Header"
import Main from "./components/Main"

import style from "./App.module.css"

export default function App() {
    return (
        <div className={style.container}>
            <header>
                <Header />
            </header>
            <main></main>
            <nav>789</nav>
        </div>
    )
}