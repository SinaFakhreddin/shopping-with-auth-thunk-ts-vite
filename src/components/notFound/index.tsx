import React from 'react';
import {Box, Heading, Image, Stack, Text} from "@chakra-ui/react";
import pageNotFound from "./../../assets/pageNotFound.gif"

const PageNotFound = () => {
    return (
        <div className={'w-full flex justify-center items-center'}>
            <div className={'w-[90%] mx-auto py-[4rem] flex flex-column justify-center items-center'} >
                <Heading color={'brand.primaryLight'}>Sorry Your requested Page Doesnt Exist</Heading>
                <img  src={pageNotFound}/>
            </div>
        </div>
    );
};

export default PageNotFound;
