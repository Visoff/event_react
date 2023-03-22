import Header from "./components/Header"

import style from "./App.module.css"

export default function App() {
    return (
        <div className={style.container}>
            <header>
                <Header />
            </header>
            <div className="main">123</div>
            <nav>789</nav>
        </div>
    )
}