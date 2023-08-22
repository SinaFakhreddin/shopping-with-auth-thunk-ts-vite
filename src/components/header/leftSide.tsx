import React from 'react';
import {HStack, Input, InputGroup, InputRightElement, Text} from "@chakra-ui/react";
import {FcSearch} from "react-icons/fc";
import Logo from "../logo";
import {Link} from "react-router-dom";



type LeftSideHeaderProps = {
    headerType?:string
}
const LeftSideHeader = ({headerType="desktop"}:LeftSideHeaderProps) => {
    return (
        <>
            <HStack justifyContent={'space-evenly'} flex={1}>
                <Link to={'/'}>
                    <Logo/>
                </Link>
                {
                    headerType==="desktop" && <Link to={'products'}>
                        <Text color={'gray.500'}>Products</Text>
                    </Link>
                }
            </HStack>
            {
                headerType==="desktop" &&  <InputGroup flex={1}>
                    <InputRightElement pointerEvents='none'>
                        <FcSearch color='gray.300' />
                    </InputRightElement>
                    <Input color={'brand.primary'} focusBorderColor={'brand.primary'} type='text' placeholder='Search...' />
                </InputGroup>
            }
        </>
    );
};

export default LeftSideHeader;
