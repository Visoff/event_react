import style from "./Home.module.css"

export default function Home() {
    return (
        <div className={style.container}>
            <h1>хакатон CityHeroes</h1>
            <h2 className="date">6 - 7 мая 2023</h2>
            <img src="https://visoff.ru/svg/prev_photo.jpg" alt="Фото с последнего CityHeroes" />
            <p>Описание хакатона, инфа и тд</p>
        </div>
    )
}