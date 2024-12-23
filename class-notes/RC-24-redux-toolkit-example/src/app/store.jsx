import { configureStore } from "@reduxjs/toolkit";
import haberSlice from "../features/haberSlice";
import yetkiSlice from "../features/yetkiSlice";


export const store = configureStore({
    reducer: {
        yetkiSlice:yetkiSlice,

        haberSlice:haberSlice

    },
  });

