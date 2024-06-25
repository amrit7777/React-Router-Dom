import { createContext, useContext, useState } from "react"

const AuthContest=createContext(null)

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)

    const login =(user)=>{
        setUser(user)
    }
    const logout=()=>{
        setUser(null)

    }
    return <AuthContest.Provider value={{user,login,logout}}>
        {children}
    </AuthContest.Provider>

}

export const useAuth=()=>{
    return useContext(AuthContest)
}