import style from "./Nav.module.css"

export default function Nav({FrameState}:{FrameState:[string, Function]}) {
    const [Frame, setFrame] = FrameState
    return (
    <div className={style.container}>
        <img onClick={() => {setFrame("Home")}} src="https://visoff.ru/svg/home.svg" alt="home" />
        <img src="https://visoff.ru/svg/schedule.svg" alt="home" />
        <img onClick={() => {setFrame("Teams")}} src="https://visoff.ru/svg/teams.svg" alt="home" />
        <img src="https://visoff.ru/svg/profile.svg" alt="home" />
    </div>
    )
}