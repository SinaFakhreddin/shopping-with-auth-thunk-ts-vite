import axios, {AxiosRequestConfig} from "axios";
import {ErrorsValidation} from "./libs";


 const callApi = (baseUrl:string )=>{

    const axiosInstance = axios.create({
        baseURL:`${baseUrl}`
    })


    axiosInstance.interceptors.request.use(
        (config:AxiosRequestConfig)=>{
            return config
        },
        error => Promise.reject(error)

    )

    axiosInstance.interceptors.response.use(
        (response)=>{
            return response
        },
        error=> {
                throw new ErrorsValidation(error.response.data.errors)
        }
    )


    return axiosInstance
}


export default callApi;