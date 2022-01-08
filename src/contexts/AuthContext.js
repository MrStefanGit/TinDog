import React, { useContext, useEffect } from 'react'
import {auth} from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(user => { //this function returns a method that, when called, it will unsubscribe this onauthstatechanged
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        signup
    }

    return(
        <AuthContext value={value}>
            {children}
        </AuthContext>
    )
}