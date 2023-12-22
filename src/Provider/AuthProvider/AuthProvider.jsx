/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Children } from "react";
import { createContext } from "react";
import auth from "../../Firebase/firebase.config";

export const AuthContext =createContext(null)
const googleProvider = new GoogleAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)

     const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
     }

     const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
     }

     const userSignIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }

     const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
     }

     useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    },[])



     const authInfo ={
         user,
        loading,
        createUser,
        googleLogIn,
        userSignIn,
        logOut

     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;