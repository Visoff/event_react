import { createContext } from "react"

const PopupContext = createContext([false, (() => {}) as Function]) as React.Context<[boolean, Function]>

export default PopupContext