import { createContext, Dispatch, SetStateAction, useState } from "react"

const PopupContext = createContext(useState(false)) as React.Context<[boolean, Dispatch<SetStateAction<boolean>>]>

export default PopupContext