import React from 'react';
import {useAppSelector} from "../../store/storeHooks";
import {truncateFunction} from "../../helpers/truncateFunction";

type CartListItemProps = {
    id:number,
    quantity:number
}
const CartListItem = ({id,quantity}:CartListItemProps) => {
    const {products} = useAppSelector(state=>state.productsSlice)
    const currentSelectedProduct = products.find((product)=>product.id===id)


    return (
            <div className={'flex w-full flex-col gap-[1rem] lg:flex-row md:flex-[row] shadow-md border rounded justify-center items-center p-2 lg:gap-[2rem] md:gap-[2rem]'}>
                <img className={'w-[50px] h-[50px]'} src={currentSelectedProduct?.image} alt=""/>
                <div className={'text-myTextSchemeLight font-bold text-sm'}>{truncateFunction(currentSelectedProduct?.title , 10)}</div>
                <div className={'text-myTextSchemeLight font-bold text-sm'}>{quantity}</div>
                <div><span className={'text-primary font-bold text-md'}>{currentSelectedProduct?.price} $</span></div>
            </div>
    );
};

export default CartListItem;
