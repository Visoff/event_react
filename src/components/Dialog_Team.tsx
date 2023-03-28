import style from "./Dialog.module.css"

interface Props {
    name:string,
    className?:string
}

export default function Team({name, className}:Props) {
    return (
        <button className={style.team+(className != undefined ? " "+className : "")}>
            <p className={style.name}>{name}</p>
        </button>
    )
}