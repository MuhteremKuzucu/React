import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: false,
    currentUser: null,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess:(state,{payload})=>{
      console.log(payload)
      state.currentUser=payload.data.username;
      state.token=payload.token;
      state.loading=true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.isAdmin = payload?.user?.isAdmin;
      state.token = payload?.token;
    },
    fetchFail:(state)=>{
      state.loading=false;
      state.error=true;
    }
  },
});


export const {fetchStart,fetchFail,registerSuccess,loginSuccess}=authSlice.actions;

export default authSlice.reducer;