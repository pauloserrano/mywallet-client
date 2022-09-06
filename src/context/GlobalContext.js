import { createContext, useContext } from "react";


const GlobalContext = createContext()

const useGlobalContext = () => {
    return useContext(GlobalContext)
}


export { GlobalContext, useGlobalContext }