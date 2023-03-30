import { createContext, Dispatch, SetStateAction, useState } from "react"

const PopupContext = createContext([false, (() => {}) as Function]) as React.Context<[boolean, Function]>

export default PopupContext