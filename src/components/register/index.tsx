import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik"
import * as yup from "yup"

import Logo from "../logo";
import register from "./../../assets/register.png"
import {formValidationSchema} from "../../helpers/schemas";
import {RegisterUserType} from "../../types";
import useSWR from "swr";
import callApi from "../../helpers/callApi";
import {AUTH_USER_ENDPOINT} from "../../constants";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


const RegisterUser = () => {
   const navigate =  useNavigate()

    const initialValue:RegisterUserType = {
        name:"",
        phone:""
    }

    const registerHandler =async (values:RegisterUserType , setFieldError)=>{
      callApi(AUTH_USER_ENDPOINT).post('/auth/register' , {
         name:values.name,
         phone:values.phone
     }).then((res)=>{
          toast("register success" , {
              type:"success",
              position:"bottom-right",
              pauseOnHover:true,
          })
          navigate('/login')

     }).catch((err)=>{
          Object.entries(err.message).map(([key , value])=>toast(value , {
              type:'error',
              position:'bottom-right'
          }))
      })
    }



    return (
               <div className={'w-full  overflow-hidden h-screen flex justify-center items-center'} >
                   <Formik
                       onSubmit={registerHandler}
                       initialValues={initialValue}
                       validationSchema={formValidationSchema}
                   >
                       <Form className={'flex shadow-xl   flex-col rounded-lg px-4 py-6 gap-4 border-primaryDark mt-[4rem] overflow-hidden'} >
                           <div className={'flex flex-col items-center'}>
                               <div className={'flex justify-center my-4'}>
                                   <span className={'font-bold text-3xl text-primaryDark'}>REGISTER NOW !</span>
                               </div>
                               <Logo/>
                               <img className={'object-contain w-[150px]'} src={register}/>
                           </div>
                           {/*<Divider/>*/}

                            <div className={'flex flex-col gap-8'}>
                                <div className={'flex flex-col md:flex-row lg:flex-row gap-6 md:items-end'}>
                                     <div className={'flex flex-col gap-2 min-h-[100px]'}>
                                         <label htmlFor="name" className={' text-lg text-myTextSchemeLight'}>Name:</label>
                                         <Field placeholder={'Your name...'} className={'rounded border border-primaryLight outline-primaryDark px-[.5rem] py-[.275rem] text-myTextScheme'} id={'name'} name={'name'} type={'text'}/>
                                         <ErrorMessage component={'div'} className={'text-red-800 text-sm'} name={'name'} id={'name'}/>
                                     </div>
                                     <div className={'flex flex-col  gap-2 min-h-[100px]'}>
                                         <label className={'text-lg text-myTextSchemeLight'} htmlFor="phone">Phone :</label>
                                         <Field placeholder={'phone number...'} className={'rounded border border-primaryLight px-[.5rem] py-[.275rem] text-myTextScheme outline-primary'} id={'phone'} name={'phone'} type={'text'}/>
                                         <ErrorMessage component={'div'} className={'text-red-800 text-sm'} name={'phone'} id={'phone'} type={'text'}/>
                                     </div>
                                </div>
                                <div className={'flex md:flex-col  items-center justify-center'}>
                                 <button
                                     type="submit"
                                     className={"text-white w-full bg-primaryDark rounded  hover:bg-primary px-4 py-2"}
                                 >
                                     Register
                                 </button>
                             </div>
                            </div>
                       </Form>
                   </Formik>


               </div>
    );
};

export default RegisterUser;
