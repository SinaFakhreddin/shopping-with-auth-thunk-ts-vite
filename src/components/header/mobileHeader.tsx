import React from 'react';
import {
    Box, Input, InputGroup, InputRightElement,
    Stack, useTheme,
} from "@chakra-ui/react";
import LeftSideHeader from "./leftSide";
import RightSideHeader from "./rightSideHeader";
import {CgMenuGridO} from "react-icons/cg";
import {FcSearch} from "react-icons/fc";

type MobileHeaderProps = {
    headerType:string

}

const MobileHeader = ({headerType}:MobileHeaderProps) => {
    const {colors} = useTheme()
    return (
        <Stack position={'sticky'} top={0} backgroundColor={'white'} zIndex={33}>
            <Stack display={{base:"flex" , lg:"none"}} alignItems={'center'} backgroundColor={'colors.brand.primary'} direction={'row'} justifyContent={'space-between'} boxShadow={'sm'} w={'100%'}>
                <Box  w={"90%"} mx={'auto'} display={"flex"}
                padding={'1rem'}
                justifyContent={"space-evenly"}>
                    <Stack direction={'row-reverse'} alignItems={'center'} gap={8}>
                        <LeftSideHeader headerType={headerType}/>
                        <CgMenuGridO size={25} color={colors.brand.primaryDark}/>
                    </Stack>
                    <Stack display={'flex'} justifyContent={'space-around'} gap={8} direction={'row'} >
                        <RightSideHeader/>
                    </Stack>
                </Box>
            </Stack>
            <InputGroup display={{base:"flex" , lg:"none"}} w={'80%'} mx={'auto'}>
                <InputRightElement pointerEvents='none'>
                    <FcSearch color='gray.300' />
                </InputRightElement>
                <Input color={'brand.primary'} focusBorderColor={'brand.primary'} type='text' placeholder='Search...' />
            </InputGroup>
        </Stack>
    );
};

export default MobileHeader;
