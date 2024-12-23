import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const getirData = createAsyncThunk(
    "haberSlice/getirData", async()=>{
        const res= await axios(
            "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb"
        );

        return res
    }
);

export const haberSlice = createSlice({
  name: "haberSlice",
  initialState: {
    haberler: [],
    loading: true,
  },

  reducers: {
    temizle: (state, { payload }) => {
        
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getirData.pending, (state) => {
        state.loading=true;
      })
      .addCase(getirData.fulfilled, (state, {payload}) => {
        state.haberler=payload;
        state.loading=false;
      });
  },

});

export const { temizle } = haberSlice.actions;

export default haberSlice.reducer;
