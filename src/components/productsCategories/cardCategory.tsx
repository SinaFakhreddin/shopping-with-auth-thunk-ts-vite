import React from 'react';
import {Product} from "../../types";

type CardCategoryProps ={
    categoryType:string
    products:Product[]
}



const CardCategory = ({categoryType,products}:CardCategoryProps) => {
    return (
        <div className={'flex hover:scale-110 transition-transform duration-600 overflow-hidden duration-800 flex-col  gap-6 flex-1 p-8 shadow-lg cursor-pointer  justify-evenly items-center rounded-lg'} >
            <div className={''}>
                <img className={' w-[150px]  h-[150px] object-contain rounded-xl'}  src={products[0].image} alt=""/>
            </div>
            <div>
                <span className={'text-primaryDark font-bold text-xl'}>{categoryType}</span>
            </div>
        </div>
    );
};

export default CardCategory;
