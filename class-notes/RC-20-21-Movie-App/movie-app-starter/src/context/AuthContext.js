import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { errorToast, successToast } from '../helpers/ToastNotify';
import { useNavigate } from "react-router-dom";


//! context alanı aç

export const YetkiContext=createContext()

const AuthContext = ({children}) => {

  const navigate = useNavigate();

   //!register için (sitede zincir yapılı fetch işlemi var biz burada async await i tercih ettik)
   //firebase.google.com/docs/auth/web/start?hl=tr

  const createKullanici=async(email,password)=>{

    try {
      await createUserWithEmailAndPassword(auth,email,password)

      successToast("Kayıt başarılı")
  
      navigate("/")

    } catch (error) {

      errorToast(error.message)
    }

    

   }

   

   //!login için daha önce oluşturulmuş kullanıcı adıyla giriş yapmak için firebase kodu

   const login=async(email,password)=>{

    try {
      await signInWithEmailAndPassword(auth, email,password)
    
      successToast("giriş başarılı")
  
      navigate("/")

    } catch (error) {
      
      errorToast(error.message)
    }
    
   }

    //!google ile giriş

    //* https://firebase.google.com/docs/auth/web/google-signin?hl=tr


    const signUpGooglE=()=>{

      //? gooogle hesaplarıma ulaşmak için firebase kodu
      const provider = new GoogleAuthProvider();

      //? açılır pencerede google hesaplarının gelmesi için firebase metodu

      signInWithPopup(auth, provider).then((res)=>{
        successToast("google ile giriş başarılı");

        navigate("/")
      })



    }



  return (
    <YetkiContext.Provider value={{createKullanici, login, signUpGooglE}}>
      {children}
    </YetkiContext.Provider>
  )
}

export default AuthContext