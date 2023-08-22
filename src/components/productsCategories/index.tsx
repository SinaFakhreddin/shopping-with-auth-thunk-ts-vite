import React from 'react';
import CardCategory from "./cardCategory";
import {useAppSelector} from "../../store/storeHooks";
import {Link} from "react-router-dom";

const ProductsCategories = () => {

    const {categories} =  useAppSelector(state=>state.productsSlice)


    return (
        <div className={'flex items-center flex-col justify-center md:items-start lg:items-start'}>
                <span className={'text-primaryDark text-xl font-bold'}>Shop Our Top Categories</span>
            <div className={'flex w-full flex-col justify-around md:flex-row lg:flex-row gap-8 p-8 rounded items-center my-8 '}>
                {
                    Object.keys(categories).map((category)=>{
                        return (
                            <Link to={`categories/${category}`} key={category}>
                                <CardCategory key={category} categoryType={category} products={categories[category]}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductsCategories;
