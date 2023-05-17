import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider;

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
            setLoading((false))
           
            if(currentUser && currentUser.email){
                const loggedUser = {
                    email : currentUser.email
                }
                fetch('http://localhost:5000/jwt',{
                    method:"POST",
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body:JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('car-access-token',data.token)
                    
                })
            }
            else{
                localStorage.removeItem('car-access-token')
            }
        })
        return ()=>{
            return unSubscribe()
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
