import { useContext } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword ,signOut, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider,signInWithPopup, sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";


const userAuthContext= createContext();

export function UserAuthContextProvider({children}){

    const [user,setUser]= useState("")

function signUp(email,password){
  return createUserWithEmailAndPassword(auth, email,password)
}

function logIn(email,password){
    return signInWithEmailAndPassword(auth, email,password)
  }

  function googleSignIn(){
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }

 function logOut(){
     return signOut(auth)
 } 

useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,(currentuser)=>{
   setUser(currentuser)
   });
   return()=>{
    unsubscribe()
   }
},[])
    return(
        <userAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn}}>
            {children}
        </userAuthContext.Provider>
    )

}

export function useUserAuth(){
    return useContext(userAuthContext)
}
