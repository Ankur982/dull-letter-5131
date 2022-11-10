import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthcontext'

export default function Dashboard() {
    const {user,logOut}= useUserAuth()
    const Navigate= useNavigate()

   const handleLogout=async ()=>{
    try{
     await logOut()
     Navigate("/login")

    }
    catch(e){
     console.log(e.message)
    }
   } 
   console.log(user)
  return (
    <div>
        <h1>Dashboard</h1>
        {user && user.email}
        <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}
