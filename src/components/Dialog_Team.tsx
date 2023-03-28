import style from "./Dialog.module.css"

interface Props {
    name:string
}

export default function Team({name}:Props) {
    return (
        <div className={style.team}>
            <p className={style.name}>{name}</p>
        </div>
    )
}