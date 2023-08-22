import React, {useEffect} from 'react';
import {Box} from "@chakra-ui/react";
import Banner from "../banner";
import SwiperComponent from "../swiperComponent";
import callApi from "../../helpers/callApi";
import {FAKE_API_BASE_URL, PRODUCT_LIST_ENDPOINT, PRODUCTS} from "../../constants";
import {useAppDispatch} from "../../store/storeHooks";
import {addCategories, addProducts, getProducts} from "../../store/productsSlice";
import { getEcoPrice, useLocalStorage} from "../../helpers/libs";
import {Product} from "../../types";
import ProductsCategories from "../productsCategories";
import {useSelector} from "react-redux";
import pink from "./../../assets/pink.gif"

const HomeComponent =  () => {
    const dispatch = useAppDispatch()
    const {loading,products , categories} = useSelector(state=>state.productsSlice)
    const popularProducts:Product[] = products?.filter((product)=>product.rating.rate>4)

    useEffect(  () => {
            dispatch(getProducts())
    }, [dispatch]);

    if (loading){
        return  <div className={'w-full h-screen flex justify-center items-center'}> <img src={pink} alt={'loading'}/></div>
    }

    return (
        <Box className={'flex w-[90%] mx-auto flex-col'} >
            <Banner/>
            <ProductsCategories/>
            <SwiperComponent products={popularProducts} heading={"POPULAR PRODUCTS"}/>
            <SwiperComponent products={products} heading={"ALL PRODUCTS"}/>
        </Box>
    );
};

export default HomeComponent;
