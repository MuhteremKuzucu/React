import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",
  initialState: {
    loading: false,
    error: false,
    firms: [],
    brands:[],
    categories:[],
    products:[],
    sales:[]

  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    // firmSuccess:(state,{payload})=>{        
    //     state.firms=payload.data
    // },
    // brandSuccess:(state,{payload})=>{        
    //     state.brands=payload.data
    // },
    stockSuccess:(state,{payload:{data,url}})=>{        
        // state[payload.url]=payload.data.data
        state[url]=data.data
        state.loading=false;
        state.error=false;
    }
  },
});

export const {fetchFail,fetchStart,stockSuccess}=stockSlice.actions;

export default stockSlice.reducer;