import { createContext, useState } from "react";
import {account} from '../lib/appwrite'
import { ID } from "react-native-appwrite";



export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession( email, password)
            const userData = await account.get()
            setUser(userData)
        } catch (error) {
            console.log(error.message)
        }
    }

    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password)
            await login(email, password)
        } catch (error) {
            console.log(error.message)
        }
    }

    async function logout() {}

    return(
        <UserContext.Provider value = {{user, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}