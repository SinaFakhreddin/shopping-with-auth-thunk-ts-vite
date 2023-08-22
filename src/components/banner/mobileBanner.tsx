import React from 'react';
import {Stack} from "@chakra-ui/react";
import mockup from "../../assets/mockup.svg";
import {useNavigate} from "react-router-dom";

const MobileBanner = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={'flex flex-col gap-[3rem] lg:flex-row md:flex-row  my-[3rem] items-center justify-around '}>
                <Stack gap={6} className={'flex-1 gap-[3rem] flex-column items-center justify-around'}>
                    <span className={'text-2xl  text-myTextSchemeLight font-semibold'}>
                        You Can Buy Online
                    </span>
                    <span className={' text-myTextSchemeLight'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, in!
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

export default MobileBanner;
