import React, {useEffect, useState} from 'react';
import {Router, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/storeHooks";
import {Product} from "../../types";
import {FAKE_API_BASE_URL, PRODUCT_LIST_ENDPOINT, PRODUCTS} from "../../constants";
import callApi from "../../helpers/callApi";
import {toast} from "react-toastify";
import SwiperComponent from "../swiperComponent";
import {addProductToCart} from "../../store/cartSlice";
import {getProducts} from "../../store/productsSlice";
import pink from "../../assets/pink.gif";
// import {addProducts} from "../../store/productsSlice";

const CurrentProduct = () => {
    const params = useParams()
    console.log("params",params)
    // const [allProducts, setAllProducts] = useState<Product[]>([]);
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const {products,loading} = useAppSelector(state=>state.productsSlice)
    console.log("state",products , loading)




    useEffect(() => {
        dispatch(getProducts())
    }, []);


    if (loading){
        return  <div className={'w-full h-screen flex justify-center items-center'}> <img src={pink} alt={'loading'}/></div>
    }

    let currentProduct = products?.find((prod)=>prod.id==id)
    return (
        <div className={'w-full'}>
            <div className={'flex flex-col gap-8 my-8 w-[90%] mx-auto'}>
                <div className={'flex w-full justify-center items-center flex-col lg:flex-row gap-8 shadow-lg p-4 border rounded-lg'}>
                    <div className={'flex flex-1 justify-center'}>
                        <img className={'w-[50%] object-cover'} src={currentProduct?.image} alt={currentProduct?.title}/>
                    </div>
                    <div className={'flex flex-1 gap-4 flex-col justify-center'}>
                        <div className={'text-3xl text-primaryDark font-bold'}>{currentProduct?.category}</div>
                        <div className={'text-2xl text-primary font-bold'}>{currentProduct?.title}</div>
                        <div className={'text-justify text-myTextSchemeLight text-lg'}>{currentProduct?.description}</div>
                        <div className={'text-xl flex justify-end items-center text-primary font-semibold'}>
                             <span className={'text-sm mr-2 text-primary font-semibold'}>$</span>
                            {currentProduct?.price}
                        </div>
                        <button onClick={()=>dispatch(addProductToCart({id:currentProduct?.id , quantity:1}))} className={'bg-primary font-bold  w-[90%] hover:bg-primaryDark text-xl text-white py-2 px-1 rounded-lg'}>Buy Now !</button>
                    </div>

                </div>
                <SwiperComponent products={products} heading={"OTHER PRODUCTS"}/>
            </div>
        </div>
    );
};

export default CurrentProduct;
