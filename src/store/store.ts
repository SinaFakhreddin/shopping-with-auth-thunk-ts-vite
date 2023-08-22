import {configureStore} from "@reduxjs/toolkit";
import favouriteListSlice from "./favouriteListSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import tokenSlice from "./tokenSlice";




export const store = configureStore({
    reducer:{
        favouriteListSlice,
        productsSlice,
        cartSlice,
        tokenSlice
    },
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
