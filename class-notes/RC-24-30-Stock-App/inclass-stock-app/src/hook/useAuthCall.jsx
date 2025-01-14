import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAxios from "./useAxios";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {axiosWithToken,axiosWithoutHeader}=useAxios()

  // Custom hook yazma kuralları
  //? 1-use Kelimesi ile başlar
  //? 2- return de { fonksiyonlar }, değişkense [ bilgiler ] gönderilmeli
  //? 3-Çağrılacağı noktada
  //? const {register}=useAuthCall()

  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithoutHeader.post(`users`,userInfo);
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const login = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithoutHeader.post(`auth/login`,userInfo);
      dispatch(loginSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const logout = async () => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.get(`auth/logout`)
      dispatch(logoutSuccess());
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { register, login, logout};
};

export default useAuthCall;
