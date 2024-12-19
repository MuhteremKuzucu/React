import React from 'react'
import Register from '../pages/Register'
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";



const AppRouter = () => {
  return (
    <>
      <Navbar/>

      <Routes>
       <Route path="/" element={<Main/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
      </Routes>

    </>
  )
}

export default AppRouter