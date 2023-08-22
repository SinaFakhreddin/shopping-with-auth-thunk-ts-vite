import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik"
import * as yup from "yup"

import Logo from "../logo";
import login from "./../../assets/register.png"
import { phoneValidationSchema} from "../../helpers/schemas";
import {LoginUserType} from "../../types";
import callApi from "../../helpers/callApi";
import {AUTH_USER_ENDPOINT} from "../../constants";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../store/storeHooks";
import {addToken} from "../../store/tokenSlice";


const LoginUser = () => {
    const navigate = useNavigate()
    const dispatch =  useAppDispatch()

    const initialValue :LoginUserType= {
        phone:""
    }


    const loginHandler =async (values:LoginUserType) =>{
      const response = await callApi(AUTH_USER_ENDPOINT).post('/auth/login' , values)
        if (response.status===200){
            dispatch(addToken(response.data.token))
            navigate('/login/verify-phone')
        }

    }


    return (
        <div className={'w-full overflow-hidden h-screen flex justify-center items-center'} >
            <Formik
                onSubmit={loginHandler}
                initialValues={initialValue}
                validationSchema={phoneValidationSchema}
            >
                <Form className={'flex shadow-xl flex-col md:flex-row lg:flex-row md:items-center lg:items-center rounded-lg px-4 py-4 gap-4  mt-[4rem] overflow-hidden'} >
                    <div className={'flex flex-col items-center'}>
                        <div className={'flex justify-center my-2'}>
                            <span className={'font-bold text-3xl text-primaryDark'}>LOGIN NOW !</span>
                        </div>
                        <Logo/>
                        <img className={'object-contain w-[250px]'} src={login}/>
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <div className={'flex w-full flex-col md:flex-row lg:flex-row  md:items-end'}>
                            <div className={'flex w-full flex-col  gap-2 min-h-[100px]'}>
                                <label className={'text-lg text-white'} htmlFor="phone">Phone :</label>
                                <Field placeholder={'phone number...'} className={'rounded border border-primaryLight px-[.5rem] py-[.275rem] text-myTextScheme outline-primary'} id={'phone'} name={'phone'} type={'text'}/>
                                <ErrorMessage component={'div'} className={'text-red-800 text-sm'} name={'phone'} id={'phone'} type={'text'}/>
                            </div>
                        </div>
                        <div className={'flex md:flex-col  items-center justify-center'}>
                            <button
                                type="submit"
                                className={"text-white w-full bg-primaryDark rounded  hover:bg-primary px-4 py-2"}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>


        </div>
    );
};

export default LoginUser;
