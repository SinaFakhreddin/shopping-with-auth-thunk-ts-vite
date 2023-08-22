import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cart, Product} from "../../types";
import {RootState} from "../store";
import cart from "../../components/cart";




type initialStateType = {
    cart:Cart[]
    showCart:boolean
}

const initialState : initialStateType = {
    cart : [],
    showCart:false
}




export const cartSlice = createSlice({
    name:"cartSlice",
    initialState ,
    reducers:{
        addProductToCart:(state:RootState , action: PayloadAction<{ id:number , quantity:number }>)=>{
           const isInCart = state.cart.find((cartItem)=>cartItem.id===action.payload.id)
            if (!isInCart){
                state.cart = [...state.cart , action.payload]
            } else {

                state.cart = [...state.cart].map((cartItem)=>{
                    if (cartItem.id===action.payload.id){
                        return {
                            ...cartItem,
                            quantity:cartItem.quantity+1
                        }
                    } else {
                        return cartItem
                    }
                })
            }
        },
        removeProductFromCart:(state:RootState , action:PayloadAction)=>{
        },
        showCartHandler:(state , action)=>{
            state.showCart = action.payload
        }
    }
})


export const {addProductToCart , removeProductFromCart , showCartHandler} = cartSlice.actions
export default cartSlice.reducer