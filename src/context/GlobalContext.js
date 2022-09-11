import { useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextProvider }