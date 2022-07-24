import React, { createContext, useContext } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const initialState = {
    currentUser: null
}

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}



export function AuthProvider(props) {
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }


    const value = {
        currentUser: initialState.currentUser,
        login,
        signup,
        logout
    }
    return (<AuthContext.Provider
        value={value}
        {...props}
    />
    )
}