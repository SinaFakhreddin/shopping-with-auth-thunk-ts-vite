import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/storeHooks";
import Cart from "../cart";
import {getProducts} from "../../store/productsSlice";
import pink from "../../assets/pink.gif";
import {useNavigate} from "react-router-dom";

const ProductList = () => {
    const dispatch = useAppDispatch()
    const {products , loading}=useAppSelector(state=>state.productsSlice)
     const navigate = useNavigate()



    useEffect(() => {
        dispatch(getProducts())
    }, []);

    if (loading){
        return  <div className={'w-full h-screen flex justify-center items-center'}> <img src={pink} alt={'loading'}/></div>
    }


    return (
        <div className={'w-full h-full flex'}>
            <div className={'flex w-[90%] gap-4 mx-auto flex-wrap py-4 '}>
                {
                    products?.map((product)=>{
                        return (
                            <div onClick={(e)=>{
                                e.stopPropagation()
                                navigate(`/products/${product.id}`)
                            }} className={'flex cursor-pointer md:max-w-[45%] lg:max-w-[32%] justify-center items-center'}>
                                <Cart {...product}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductList;
