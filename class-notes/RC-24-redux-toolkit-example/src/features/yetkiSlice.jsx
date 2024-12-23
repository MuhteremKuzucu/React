import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice=createSlice({
    name:"yetkiSlice",
    initialState:{
        email:"",
        password:""
    },

    reducers:{
        olusturKullanici:(state,{payload})=>{

            state.email=payload.email
            state.password=payload.password

        }
    }
})

export const {olusturKullanici}= yetkiSlice.actions

export default yetkiSlice.reducer