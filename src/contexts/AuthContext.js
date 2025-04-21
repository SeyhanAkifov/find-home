"use client";
import { createContext, useContext, useState} from 'react';

export const AuthContext = createContext();



const initialState = {
    email: "",
    token: "",
    expiration: "",
    username: "" 
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({initialState})

    const authenticate = (email, token, expiration, username) => {
        setUser({
            email, 
            token, 
            expiration,
            username
        })
    }

    const logout = () => {
        setUser({ })
    }
    return(
        <AuthContext.Provider value={{user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {

    let authState = useContext(AuthContext);

    return authState;
}