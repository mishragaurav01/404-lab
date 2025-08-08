import { createContext, useState } from "react";

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    const [user, setUser] = useState("Gaurav")

    // async function login(email, password) {}
    // async function register(email, password) {}
    async function logout() {}

    return(
        <UserContext.Provider value = {{user, logout}}>
            {children}
        </UserContext.Provider>
    )
}