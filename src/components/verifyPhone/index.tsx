import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik"

import Logo from "../logo";
import login from "./../../assets/register.png"
import {codeValidationSchema} from "../../helpers/schemas";
import {VerifyCodeUserType} from "../../types";
import {useAppSelector} from "../../store/storeHooks";
import callApi from "../../helpers/callApi";
import {AUTH_USER_ENDPOINT} from "../../constants";
import {setCookie} from "../../helpers/libs";
import {useNavigate} from "react-router-dom";


const VerifyPhone = () => {
    const {token} =  useAppSelector(state=>state.tokenSlice)
    const navigate  = useNavigate()

    const initialValue:VerifyCodeUserType = {
        code:""
    }

    const validationTokenHandler =async (values:VerifyCodeUserType) => {
            const response = await callApi(AUTH_USER_ENDPOINT).post('/auth/login/verify-phone' , {
                token,
                code:values.code
            })
        if (response.status===200){
            setCookie(response?.data?.user?.token , 4)
            navigate('/dashboard')
        }

    }


    return (
        <div className={'w-full  overflow-hidden h-screen flex justify-center items-center'} >
            <Formik
                onSubmit={validationTokenHandler}
                initialValues={initialValue}
                validationSchema={codeValidationSchema}
            >
                <Form className={'flex shadow-xl flex-col md:flex-row lg:flex-row md:items-center lg:items-center rounded-lg px-4 py-4 gap-4  mt-[4rem] overflow-hidden'} >
                    <div className={'flex flex-col items-center'}>
                        <div className={'flex justify-center my-2'}>
                            <span className={'font-bold text-3xl text-primaryDark'}>VERIFY CODE !</span>
                        </div>
                        <Logo/>
                        <img className={'object-contain w-[250px]'} src={login}/>
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <div className={'flex w-full flex-col md:flex-row lg:flex-row  md:items-end'}>
                            <div className={'flex w-full flex-col  gap-2 min-h-[100px]'}>
                                <label className={'text-lg text-white'} htmlFor="code">verify code :</label>
                                <Field placeholder={'code...'} className={'rounded border border-primaryLight px-[.5rem] py-[.275rem] text-myTextScheme outline-primary'} id={'code'} name={'code'} type={'text'}/>
                                <ErrorMessage component={'div'} className={'text-red-800 text-sm'} name={'code'} id={'code'} type={'text'}/>
                            </div>
                        </div>
                        <div className={'flex md:flex-col  items-center justify-center'}>
                            <button
                                type="submit"
                                className={"text-white w-full bg-primaryDark rounded  hover:bg-primary px-4 py-2"}
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>


        </div>
    );
};

export default VerifyPhone;
