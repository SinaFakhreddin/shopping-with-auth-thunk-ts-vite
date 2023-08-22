import React from 'react';
import {Badge, Stack, useTheme} from "@chakra-ui/react";
import {PiShoppingCartSimpleFill} from "react-icons/pi";
import {MdFavorite} from "react-icons/md";
import {BiLogIn} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/storeHooks";
import {showAuthOptionsHandler, showFavListHandler, showUserOptionHandler} from "../../store/favouriteListSlice";
import FavouriteListBox from "../favouriteList";
import {showCartHandler} from "../../store/cartSlice";
import CartList from "../cartList";
import {FiLogIn} from "react-icons/fi"
import {HiUserCircle} from "react-icons/hi"
import Cookies from "universal-cookie";
import {MY_TOKEN} from "../../constants";
import {removeToken} from "../../store/tokenSlice";
import UserOptions from "../userOptions";
import {authOptionsItems, userOptionsItems} from "../../helpers/libs";

const RightSideHeader = () => {
    const {colors} =  useTheme()
    const dispatch = useAppDispatch()
    const {showFavList , showAuthOptions , favProduct , showUserOption} = useAppSelector(state=>state.favouriteListSlice)
    const {showCart , cart} = useAppSelector(state=>state.cartSlice)
    const cookie = new Cookies()
   const token = cookie.get(MY_TOKEN)

    const showFavouriteListHandler = ()=>{
        showCart && dispatch(showCartHandler(false))
        dispatch(showFavListHandler(!showFavList))
    }
    const showCartListhandler = ()=>{
        showFavList && dispatch(showFavListHandler(false))
        dispatch(showCartHandler(!showCart))
    }


    return (
        <>
            <Stack display={'flex'} direction={'column'} position={'relative'}>
                <PiShoppingCartSimpleFill  onClick={showCartListhandler} style={{cursor:"pointer"}} color={colors.brand.primary} size={25}/>
                <Badge position={'absolute'} top={'-7px'} right={'-7px'} data-test-id={'cart'} rounded={'50%'} display={'flex'} alignItem={'center'} justifyContent={'center'} color={'white'} colorScheme={"pink"}>{ cart.reduce((acc , curr)=> acc+curr.quantity,0)}</Badge>
                {
                    showCart && <CartList/>
                }
            </Stack>
            <div  className={'flex relative'} >
                <MdFavorite onClick={showFavouriteListHandler} style={{cursor:"pointer"}} color={colors.brand.primary}  size={25}/>
                <Badge position={'absolute'} top={'-7px'} right={'-7px'} rounded={'50%'} display={'flex'} alignItem={'center'} justifyContent={'center'} color={'white'} colorScheme={"pink"}>{favProduct?.length}</Badge>
                {showFavList && <FavouriteListBox/>}
            </div>
            <Stack>
                   {
                       token ?
                           <>
                               <HiUserCircle onClick={()=>dispatch(showUserOptionHandler())} size={25} className={'text-primary cursor-pointer'} />
                               {
                                   showUserOption && <UserOptions options={userOptionsItems}/>
                               }
                           </>
                           :
                           <>
                                   <FiLogIn onClick={()=>dispatch(showAuthOptionsHandler())} size={25} className={'text-primary cursor-pointer'}/>
                               {
                                   showAuthOptions && <UserOptions options={authOptionsItems}/>
                               }
                           </>
                   }
            </Stack>
        </>
    );
};

export default RightSideHeader;
