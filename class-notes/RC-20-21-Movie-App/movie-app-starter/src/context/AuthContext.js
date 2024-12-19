import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { successToast } from '../helpers/ToastNotify';
import { useNavigate } from "react-router-dom";


//! context alanı aç

export const YetkiContext=createContext()

const AuthContext = ({children}) => {

  const navigate = useNavigate();

   //!register için (sitede zincir yapılı fetch işlemi var biz burada async await i tercih ettik)
   //firebase.google.com/docs/auth/web/start?hl=tr

   const createKullanici=async(email,password)=>{

    await createUserWithEmailAndPassword(auth,email,password)

    successToast("Kayıt başarılı")

    navigate("/")

   }

   //!login için daha önce oluşturulmuş kullanıcı adıyla giriş yapmak için firebase kodu

   const login=async(email,password)=>{
    await signInWithEmailAndPassword(auth, email,password)
    
    successToast("giriş başarılı")

    navigate("/")
   }

  return (
    <YetkiContext.Provider value={{createKullanici, login}}>
      {children}
    </YetkiContext.Provider>
  )
}

export default AuthContext