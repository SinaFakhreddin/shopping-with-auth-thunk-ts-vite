import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Product} from "../types";
import * as yup from "yup";
import Cookies from "universal-cookie";




export const useLocalStorage = <T>(key:string , initialValue:T):[T , Dispatch<SetStateAction<T>>]=>{
    const [value, setValue] = useState(()=>{
        if (!initialValue) return
        const value = localStorage.getItem(key)
        if (value){
            return;
        } else {
            localStorage.setItem(key , JSON.stringify(initialValue))
            return initialValue
        }
    });


    useEffect(() => {
        if (localStorage.getItem(key)){
            localStorage.setItem(key , JSON.stringify(value))
        }
    }, [key , value]);


    return [value , setValue]

}


export const getEcoPrice = async (products:Product[])=>{
  const categorisedProducts = await products.reduce((acc,curr)=>{
        if (!acc[curr.category]){
            acc[curr.category] = []
        } else {
            acc[curr.category].push(curr)
        }
        return acc
    } , {})

   Object.keys(categorisedProducts).map((category)=>{
    let x = {}
        categorisedProducts[category].reduce((acc , curr)=>{
            if (!x[curr.category]){
                x[curr.category] = curr.price
            } else {
                x[curr.category] +=curr.price
            }
            return x
            // return Math.round(curr.price + acc/categorisedProducts[category].length)
        },0)
    })

}



export class ErrorsValidation {

    message:{}

    constructor(message) {
        this.message = message
    }

}


export const setCookie = (token:string , days:number=10)=>{
    const cookie = new Cookies()

    cookie.set("my-token" , token , {
        maxAge:3600*24*days,
        path:"/",
        secure:true
    } )


}

export const userOptionsItems:string[] = ["user profile","edit profile","delete profile","switch account","logout"]
export const authOptionsItems:string[] = ["register" , 'login']
