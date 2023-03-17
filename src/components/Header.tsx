import style from "./Header.module.css"

export default function Header() {
    return (
        <div className={style.container}>
            <img src="https://visoff.ru/svg/CityHeroes_Icon.svg" alt="Лого CityHeroes" />
            <button>Зарегистрироваться</button>
        </div>
    )
}