import React from 'react';
import {FavouriteProduct} from "../../types";
import {truncateFunction} from "../../helpers/truncateFunction";
import {useAppSelector} from "../../store/storeHooks";
import {Divider, useTheme} from "@chakra-ui/react";

type FavouriteListItemProps = {
    items:FavouriteProduct
}

const ListItem = (props:FavouriteListItemProps) => {
    const {favProduct} =useAppSelector(state=>state.favouriteListSlice)
    const {brand} = useTheme().colors

    return (
        <div className={'flex w-full flex-col gap-[1rem] md:flex-row lg:flex-row shadow-md border rounded justify-center items-center p-2 lg:gap-[2rem] md:gap-[2rem]'}>
            <img className={'w-[50px] h-[50px]'} src={props.image} alt=""/>
            <div className={'text-myTextSchemeLight font-bold text-sm'}>{truncateFunction(props.title , 10)}</div>
            <div><span className={'text-primary font-bold text-md'}>{props.price} $</span></div>
        </div>
    );
};

export default ListItem;
