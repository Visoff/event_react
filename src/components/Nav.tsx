import style from "./Nav.module.css"

export default function Nav() {
    return (
    <div className={style.container}>
        <img src="https://visoff.ru/svg/home.svg" alt="home" />
        <img src="https://visoff.ru/svg/schedule.svg" alt="home" />
        <img src="https://visoff.ru/svg/teams.svg" alt="home" />
        <img src="https://visoff.ru/svg/profile.svg" alt="home" />
    </div>
    )
}