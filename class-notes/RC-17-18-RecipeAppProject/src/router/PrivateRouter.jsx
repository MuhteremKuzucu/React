// Kullanıcı doğru kullanıcı adı ve şifre girdiyse home sayfasına yöönlendireceğiz
// kullanıcı adı ve şifre yok - O yüzden context yapısını kuralım

import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeProvider'
import { Navigate,Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const {name,password}=useContext(RecipeContext)
  return name === "helen" && password === "1234" ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRouter