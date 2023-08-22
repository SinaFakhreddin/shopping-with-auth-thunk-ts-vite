import useSWR from "swr";
import callApi from "./callApi";
import {AUTH_USER_ENDPOINT} from "../constants";
import {RegisterUserType} from "../types";
//
//
export const useAuth = (values:RegisterUserType)=>{
     const {data , error , isLoading} = useSWR("register" ,   ()=>{
          return  callApi(AUTH_USER_ENDPOINT).post("/auth/register" , {
               name:values.name,
               phone:values.phone
          })

     })


     // console.log("data",data , "error",error , "loading",isLoading)


     return {data ,error , isLoading}
}