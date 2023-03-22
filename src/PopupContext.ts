import { createContext, useState } from "react"

const PopupContext = createContext() as React.Context<[boolean, Function]>

export default PopupContext