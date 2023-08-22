import React, {useState} from 'react';
import ListItem from "../favouriteList/listItem";
import {Link, useNavigate} from "react-router-dom";
import {HiUserCircle} from "react-icons/hi"
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../../store/storeHooks";
import {removeToken} from "../../store/tokenSlice";
import {toast} from "react-toastify";
import {showUserOptionHandler} from "../../store/favouriteListSlice";
import Cookies from "universal-cookie";
import {MY_TOKEN} from "../../constants";


type UserOptionsProps = {
    options:string[]
}


const UserOptions = ({options}:UserOptionsProps) => {
    const [highlightedIndex, sethighlightedIndex] = useState<number>(-1);
    const cookie = new Cookies()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    console.log("options",options)

    const hashMap = {
        logout: ()=>{
            console.log("ghere")
            dispatch(removeToken())
            cookie.remove(MY_TOKEN)
            toast("your token is deleted with successfuly", {
                type:"success",
                position:"bottom-right"
            })
            dispatch(showUserOptionHandler())
            navigate('/')
        },
        login:function () {
           return navigate('login' )
        }
        ,
        register:function () {
            return navigate('register')
        }

    }

    const logoutHandler = (listItem:string)=>{
        hashMap[listItem]()
    }

    return (
        <div className={'flex flex-col gap-4 justify-center items-center absolute shadow-xl bg-white top-[50%] right-[10%] md:right-[5%] md:top-[100%] lg:right-[5%] lg:top-[100%] rounded-lg w-max z-40 p-4'}>
            <HiUserCircle size={40} className={'text-primary'}/>
            <span className={'text-xl font-bold text-primary'}>User Options</span>
            <div className={'w-full'}>
                <ul className={'flex w-full flex-col gap-[1rem]'}>
                    {
                        options.map((op,index)=>{
                            return <span onMouseEnter={()=>sethighlightedIndex(index)} onClick={()=>logoutHandler(op)} className={`flex transition-all cursor-pointer duration-300 hover:px-[.75rem] px-[.375rem] rounded py-[.125rem] text-primary w-full font-semibold ${highlightedIndex===index ? 'bg-primary text-white':""}`} >{op}</span>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default UserOptions;
