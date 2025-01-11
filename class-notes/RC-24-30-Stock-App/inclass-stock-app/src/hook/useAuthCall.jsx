import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const {token}=useSelector((state) => state.auth);

  // Custom hook yazma kuralları
  //? 1-use Kelimesi ile başlar
  //? 2- return de { fonksiyonlar }, değişkense [ bilgiler ] gönderilmeli
  //? 3-Çağrılacağı noktada
  //? const {register}=useAuthCall()

  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        "https://11103.fullstack.clarusway.com/users",
        userInfo
      );
      console.log("register içinde", data);
      dispatch(registerSuccess(data));
      navigate("/stock")

    } catch (error) {
      dispatch(fetchFail());
    }
  };


  const login = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        "https://11103.fullstack.clarusway.com/auth/login",
        userInfo
      );
      console.log("login içinde", data);
      dispatch(loginSuccess(data));
      navigate("/stock")

    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const logout = async () => {
    dispatch(fetchStart());

    try {
      const { data } = await axios(
        "https://11103.fullstack.clarusway.com/auth/logout",
        {
          headers:{
          Authorization:`Token ${token}`
        }}        
      );

      dispatch(logoutSuccess())
      navigate("/")
     

    } catch (error) {
      dispatch(fetchFail());
    }
  };



  return { register ,login, logout};
};

export default useAuthCall;
