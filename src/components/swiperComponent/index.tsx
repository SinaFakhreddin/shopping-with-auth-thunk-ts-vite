import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Zoom} from 'swiper/modules';
import MyCartComponent from "../cart";
import {Product} from "../../types";
import {Heading} from "@chakra-ui/react";
import {useAppSelector} from "../../store/storeHooks";
import {Link, useNavigate} from "react-router-dom";




type SwiperComponentProps = {
    products:Product[]
    heading:string
}


const SwiperComponent = ({products,heading}:SwiperComponentProps) => {
    const navigate= useNavigate()

    return (
        <div className={'cursor-pointer overflow-hidden h-full my-4'} >
            <Heading my={4} size={'md'} color={'brand.primary'}>{heading}</Heading>
            <Swiper
               modules={[Autoplay , Zoom]}
               zoom={true}
                loop={true}
                autoplay={{
                    delay:500,
                    disableOnInteraction:true,
                    pauseOnMouseEnter:true,
                    reverseDirection:true
                }}
                speed={2000}
               spaceBetween={50}
               breakpoints={{
                   320:{
                     width:320,
                     slidesPerView:1
                   },
                   640: {
                       width: 640,
                       slidesPerView: 2,
                   },
                   768: {
                       width: 768,
                       slidesPerView: 3,
                   },
                   980:{
                       width:980,
                       slidesPerView:3
                   }

               }}
            >
                {
                    products?.map((product)=>
                            <SwiperSlide onClick={(e)=>{
                                e.stopPropagation();
                                navigate(`/products/${product.id}`)
                            }}>
                                  <MyCartComponent  {...product}/>
                            </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default SwiperComponent;
