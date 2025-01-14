import React from "react";
import { fetchFail, fetchStart, stockSuccess } from "../features/stockSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";

const useStockCall = () => {
  const dispatch=useDispatch()
  const {token}=useSelector((state)=>state.auth)
  const BASE_URL = import.meta.env.VITE_BASE_URL;
/* -------------------------------------------------------------------------- */
//   const getFirm = async () => {
//     dispatch(fetchStart());

//     try {
//       const { data } = await axios(`${BASE_URL}firms`, {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });

//       console.log(data);
//       dispatch(firmSuccess(data))
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };
// /* -------------------------------------------------------------------------- */
// const getBrands = async () => {
//     dispatch(fetchStart());

//     try {
//       const { data } = await axios(`${BASE_URL}brands`, {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });

//       console.log(data);
//       dispatch(brandSuccess(data))
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };

//   Bu şekilde hersayfa için ayrı bir fonksyion yazmak yerine DRY gereği tek bir fonksyion yazıyoruz. 
//   Bu nedenle getFirm ve getBrand fonksiyonlarını kullanmayıp getStockDatayı kullanacağız.
/* -------------------------------------------------------------------------- */

const getStockData= async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios(`${BASE_URL}${url}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(stockSuccess({data,url}))
    } catch (error) {
      dispatch(fetchFail());
    }
  };



  return { getStockData };
};

export default useStockCall;
