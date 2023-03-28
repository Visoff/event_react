import style from "./Dialog.module.css"

interface Props {
    name:string,
    className?:string
}

export default function Team({name, className}:Props) {
    return (
        <div className={style.team+(className != undefined ? " "+className : "")}>
            <p className={style.name}>{name}</p>
        </div>
    )
}