import React from 'react'
import {Route, Routes } from "react-router-dom"
import Login from './components/Auth/login'
import Phonelogin from './components/Auth/Phonelogin'
import Signup from './components/Auth/signup'
import Dashboard from './components/Dashboard'

export default function AllRoutes() {
  return (
    <div>
     <Routes>
     <Route path="/" element={<h1>Homepage</h1>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>   
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/phonelogin" element={<Phonelogin/>}/>
     </Routes>
    </div>
  )
}
