import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import callApi from "../../helpers/callApi";
import {CATEGORY, FAKE_API_BASE_URL, PRODUCTS} from "../../constants";
import useSWR from "swr";
import Cart from "../cart";
import pink from "../../assets/pink.gif";

const CategoryPage = () => {
    const {id} = useParams()
    const {data,error,isLoading} = useSWR(CATEGORY , ()=>{
        return  callApi(`${FAKE_API_BASE_URL}${PRODUCTS}/${CATEGORY}`).get(`/${id}`)
    })

    if (isLoading){
        return  <div className={'w-full h-screen flex justify-center items-center'}> <img src={pink} alt={'loading'}/></div>
    }

    return (
        <div className={'flex w-full'}>
            <div className={'flex w-[90%] gap-4 mx-auto flex-wrap py-4 '}>

                {error & <span>an error has occured</span>}
                {
                    data?.data?.map((product)=>{
                        return (
                            <div className={'flex md:max-w-[30%] lg:max-w-[30%] justify-center items-center'} key={product.id}>
                                <Cart {...product}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CategoryPage;
