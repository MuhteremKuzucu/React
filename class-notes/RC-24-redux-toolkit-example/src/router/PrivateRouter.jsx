import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

  const {email,password}=useSelector((state)=>state.yetkiSlice)
  return email==="muhterem" && password==="12345" ? (<Outlet/>) : <Navigate to="/login"/>
}

export default PrivateRouter