import { useContext } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword ,signOut, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
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

useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,(currentuser)=>{
   setUser(currentuser)
   });
   return()=>{
    unsubscribe()
   }
},[])
    return(
        <userAuthContext.Provider value={{user,signUp}}>
            {children}
        </userAuthContext.Provider>
    )

}

export function useUserAuth(){
    return useContext(userAuthContext)
}
