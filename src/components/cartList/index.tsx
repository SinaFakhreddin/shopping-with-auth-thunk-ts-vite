import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../store/storeHooks";
import ListItem from "../favouriteList/listItem";
import CartListItem from "./cartListItem";
import {Divider} from "@chakra-ui/react";
import {Product} from "../../types";


const CartList = () => {
    const {cart} = useAppSelector(state=>state.cartSlice)
    const {products} = useAppSelector(state=>state.productsSlice)
    const [selectedProducts, setSelectedProducts] = useState([]);
    useEffect(() => {
        const cartProducts = cart?.reduce((acc,curr)=>{
            const selected =  products?.find((product)=>product.id===curr.id)
            selected && acc.push({...selected, quantity:curr.quantity})
            return acc
        },[])
        setSelectedProducts(cartProducts)
    }, [cart]);



    return (
        <div className={'flex flex-col gap-4 items-center justify-center transition duration-200 absolute shadow-xl bg-white text-white top-[40px] right-0 p-8 rounded-lg min-h-[200px] w-max z-40'}>
            <span className={'text-xl font-bold text-primary'}>Cart List</span>

            {
                cart?.length> 0 ?
                    cart?.map((cartItem)=>{
                             return <CartListItem id={cartItem.id} quantity={cartItem.quantity}/>
                    }) : <span>cart is empty</span>
            }
            <Divider />
            <div className={'flex gap-4 justify-between text-primary w-full'}>
                <div className={'text-lg font-bold'}>Quantity : {cart?.reduce((acc,curr)=>Math.round(Math.floor(acc+curr.quantity)),0)}</div>
                <div className={'text-lg font-bold'}>price:<span className={'text-sm ml-2 font-semibold'}>$</span> {selectedProducts?.reduce((acc,curr)=>acc+(curr.quantity*curr.price) , 0)} </div>
            </div>
        </div>
    );
};

export default CartList;
