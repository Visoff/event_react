import Header from "./components/Header"

import style from "./App.module.css"

export default function App() {
    return (
        <div className={style.container}>
            <header>
                <Header />
            </header>
            <main>{new Array(1000).fill(1)}</main>
            <nav>789</nav>
        </div>
    )
}