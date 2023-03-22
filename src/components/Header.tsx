import { useContext } from "react"
import PopupContext from "../PopupContext"
import style from "./Header.module.css"

export default function Header() {
    const [Active, setActive] = useContext(PopupContext)
    return (
        <div className={style.container}>
            <img src="https://visoff.ru/svg/CityHeroes_Icon.svg" alt="Лого CityHeroes" />
            <button onClick={() => {setActive(true)}}>Зарегистрироваться</button>
        </div>
    )
}