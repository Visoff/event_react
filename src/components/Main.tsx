import style from "./Main"

export default function Main() {
    return (
        <div className={style.container}>
            {new Array(10000).fill(1)}
        </div>
    )
}