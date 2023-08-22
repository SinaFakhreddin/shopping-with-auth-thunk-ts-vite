import React from 'react';
import mockup from "../../assets/mockup.svg"
import {Button, Link, Stack, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../store/storeHooks";

const Banner = () => {
    const navigate =useNavigate()


    return (
        <>
            <div className={'flex flex-col gap-[3rem] lg:flex-row md:flex-row  my-[3rem] items-center justify-around '}>
                <Stack gap={6} className={'flex-1 gap-[3rem] flex-column items-start justify-around'}>
                    <span className={'text-6xl  text-primary font-bold'}>
                        You Can Buy Online
                    </span>
                    <span style={{textShadow:"2px 4px 3px hsl(337,79%,70%)"}} className={'text-justify text-myTextSchemeLight'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis culpa dignissimos, doloremque illo iste iusto magni maxime molestias mollitia nesciunt omnis perferendis qui quidem reprehenderit, sint tempore totam veritatis.
                    </span>
                        <button onClick={()=>navigate('products')} className={'bg-primary py-2 px-4 rounded text-white hover:bg-primaryDark font-bold  w-[80%]'}>All Products</button>
                </Stack>
                <Stack className={'flex-1'}>
                    <img className={'w-full'}  src={mockup} alt={'banner'}/>
                </Stack>
            </div>
        </>
    );
};

export default Banner;
