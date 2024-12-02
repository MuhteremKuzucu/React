
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  return JSON.parse(localStorage.getItem("email"))==="ipek" && 
  JSON.parse(localStorage.getItem("pass"))==="1234" ? <Outlet/> : <Navigate to="/login"/>
}

 // kullanici doğru  isim girdiyse Outlet komponenti sayesinde istenilen sayfaya git,yanlışlık varsa Navigate ile bulunduğun yerde (Login) kal ya da başka path veriledebilir
export default PrivateRouter
