import React from 'react';
import {Divider, Stack, Text} from "@chakra-ui/react";
import {useAppSelector} from "../../store/storeHooks";
import ListItem from "./listItem";

const FavouriteListBox = () => {
    const {favProduct} =useAppSelector(state=>state.favouriteListSlice)

    return (
        <div className={'flex flex-col gap-4 justify-center items-center absolute shadow-xl bg-white  top-[40px] right-0 rounded-lg w-max z-40 p-4'}>
            <span className={'text-xl font-bold text-primary'}>Favourite List</span>
            {
                favProduct?.length > 0 ? favProduct?.map((fav)=>{
                    return <ListItem key={fav.id} {...fav}/>
                }) : <div><span className={'text-myTextSchemeLight'}>no favourite Item</span></div>
            }
        </div>
    );
};

export default FavouriteListBox;
