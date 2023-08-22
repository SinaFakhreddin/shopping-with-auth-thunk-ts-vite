import React, {useState} from 'react';
import {Divider, Heading, HStack, Image, Stack, Text, useTheme} from "@chakra-ui/react";
import {Product} from "../../types";
import {truncateFunction} from "../../helpers/truncateFunction";
import {MdAddShoppingCart,MdFavorite} from "react-icons/md"
import {BsBookmarkHeartFill,} from "react-icons/bs"
import ReactStars from 'react-stars'
import {useAppDispatch, useAppSelector} from "../../store/storeHooks";
import {addProductToCart} from "../../store/cartSlice";
import {addFavouriteProduct, removeFavouriteProduct} from "../../store/favouriteListSlice";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";


const MyCartComponent = ({image,price,title,description , rating , category , id }:Product ) => {
    const [favourite, setFavourite] = useState<boolean>(false);
    const dispatch = useAppDispatch()
    const theme  = useTheme()


    const addToCartHandler = (e) => {
        e.stopPropagation()
        dispatch(addProductToCart({id:id , quantity:1}))
        toast("added to cart" , {
            type:"success",
            position:"bottom-right"
        })
    }

    const addFavouriteHandler = (id:number) => {
      if (favourite){
          setFavourite(false)
          dispatch(removeFavouriteProduct({id , price , title , image}))
      } else {
          setFavourite(true)
          dispatch(addFavouriteProduct({id , price , title , image}))
      }
    }



    return (
        <div  className={ `flex flex-col w-full relative p-4 rounded shadow overflow-hidden`}>
            {/*<Link to={`products/${id}`}>*/}
                <Stack  gap={4}>
                    <div className={'w-full flex justify-center items-center'}>
                        <Image  boxSize={{base:"100px" , lg:"150px"}}
                                objectFit={"contain"}
                                rounded={'lg'} src={image} alt={title}/>
                        {favourite ?<MdFavorite onClick={(e)=> {
                                e.stopPropagation()
                                addFavouriteHandler(id)
                            }} className={'text-primary text-2xl absolute top-0 right-0 cursor-pointer'}/> :
                            <BsBookmarkHeartFill onClick={(e)=> {
                                e.stopPropagation()
                                addFavouriteHandler(id)
                            }} className={'text-primary text-2xl absolute top-0 right-0 cursor-pointer'}/>
                        }
                    </div>
                    <div className={'flex justify-between items-center'}>
                        <Heading size={'md'} className={'text-myTextSchemeLight'}>{truncateFunction(title , 10)}</Heading>
                        <Heading className={'text-primary'} size={"md"}>
                            <span className={'tex-primary text-sm mr-1'}>
                                $
                            </span>
                            {price}

                        </Heading>
                    </div>
                    <div className={'flex flex-col justify-around  gap-4'}>
                        <p className={'mt-2 text-myTextSchemeLight'}>{truncateFunction(description , 50)}</p>
                        <div className={'flex justify-between items-center'}>
                            <div className={'flex  items-center justify-evenly w-1/2'}>
                                <ReactStars  count={5} value={rating.rate} size={20} color2={theme.colors.brand.primaryDark}/>
                                <span className={'text-primaryLight font-semibold text-sm'}>{rating.rate}</span>
                            </div>
                            <span className={'text-myTextSchemeLight font-semibold'}>{rating.count}</span>
                        </div>
                    </div>
                    <Divider stroke={'gray.200'} my={4}/>
                </Stack>
            {/*</Link>*/}
            <button data-test-id={'cart-button'} onClick={addToCartHandler} className={'w-full flex justify-center items-center rounded text-white bg-primary  py-1 px-2 hover:bg-primaryDark'}>
                Add To Cart
                <MdAddShoppingCart className={'ml-2 text-xl'}/>
            </button>
        </div>
    );
};

export default MyCartComponent;
