import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { checkApi } from "./apis/checkApi";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,

        [checkApi.reducerPath] : checkApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(checkApi.middleware)
})