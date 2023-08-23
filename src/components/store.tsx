import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./registerSlice";
import loginSlice from "./loginSlice";

export const store = configureStore({
    reducer: {
         registerSlice: registerSlice,
         loginSlice: loginSlice
    }
})

export type RootState = ReturnType<typeof store.getState>