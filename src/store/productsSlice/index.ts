import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../../types";
import {createAsyncThunk} from "@reduxjs/toolkit";
import callApi from "../../helpers/callApi";
import {FAKE_API_BASE_URL, PRODUCTS} from "../../constants";


export const getProducts = createAsyncThunk(
    "productsSlice/getProducts",
    async (thunkApi)=>{
        console.log("getProducts Thunk call 1" , thunkApi)
        const response = await callApi(FAKE_API_BASE_URL).get(PRODUCTS)
        console.log(" response thunk 1",response)
        return response.data
    }

)



type InitialState = {
    loading:boolean
    products:Product[]
    categories:{}
}

const initialState:InitialState = {
     products :[],
    categories:{},
    loading:false
}


export const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        // addProducts:(state , action:PayloadAction)=>{
        //    state.products = [...action.payload]
        // },
        // addCategories : (state , action)=>{
        //     console.log("action",action)
        //     state.categories = [...action.payload].reduce((acc,curr)=>{
        //         if (!acc[curr.category]){
        //             acc[curr.category] = []
        //         } else {
        //             acc[curr.category].push(curr)
        //         }
        //         return acc
        //     } , {})
        // }
    },
    extraReducers:{
        [getProducts.pending]:(state)=>{
            console.log("thunk pending")
            state.loading = true
        },
        [getProducts.fulfilled]:(state , action)=>{
            console.log("thunk fulfilled fucking" ,"payload" ,action.payload)
            state.loading = false,
                state.products = [...action.payload]
            state.categories = [...action.payload].reduce((acc,curr)=>{
                if (!acc[curr.category]){
                    acc[curr.category] = []
                } else {
                    acc[curr.category].push(curr)
                }
                return acc
            } , {})
        } ,
        [getProducts.rejected] : (state)=>{
            console.log("thunk reject")
            state.loading = false
        }
    }
})


// export const {addProducts  , addCategories} = productsSlice.actions

export default productsSlice.reducer

