import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FavouriteProduct, Product} from "../../types";
import {RootState} from "../store";


type InitialStateFavList = {
    favProduct:FavouriteProduct[],
    showFavList:boolean
    showUserOption:boolean
    showAuthOptions:boolean
}


const initialState:InitialStateFavList = {
    favProduct:[],
    showFavList:false,
    showUserOption:false,
    showAuthOptions:false
} as InitialStateFavList


export const favouriteListSlice = createSlice({
    name:"favouriteSlice",
    initialState,
    reducers:{
        addFavouriteProduct:(state ,action:PayloadAction<FavouriteProduct>)=>{
            state.favProduct = [ ...state.favProduct,action.payload]
        } ,
        removeFavouriteProduct:(state , action:PayloadAction)=>{
           state.favProduct = [...state.favProduct].filter((fav)=>fav.id!==action.payload.id)
        },
        showFavListHandler :(state , action:PayloadAction)=>{
            state.showFavList = action.payload

        },
        showUserOptionHandler : (state,action )=>{
            state.showUserOption = !state.showUserOption
        },
        showAuthOptionsHandler :(state , action)=>{
            state.showAuthOptions = !state.showAuthOptions
        }

    }



})


export const {addFavouriteProduct , removeFavouriteProduct,showAuthOptionsHandler ,showFavListHandler, showUserOptionHandler} = favouriteListSlice.actions


export default favouriteListSlice.reducer