import React from 'react';
import {
    Box,
    Stack,
} from "@chakra-ui/react";
import LeftSideHeader from "./leftSide";
import RightSideHeader from "./rightSideHeader";



const DesktopHeader = () => {
    return (
        <>
         <Stack position={'sticky'} top={0} backgroundColor={'white'} display={{base:"none" , lg:"flex"}} alignItems={'center'}  direction={'row'} justifyContent={'space-between'} boxShadow={'sm'} w={'100%'} zIndex={33}>
             <Box display={'flex'}  justifyContent={'space-between'} alignItems={'center'} py={'.5rem'} w={"90%"} mx={'auto'}>
                 <Stack direction={'row'} flex={'1'} >
                    <LeftSideHeader/>
                 </Stack>
                 <Stack flex={'1'} justifyContent={'flex-end'} direction={'row'} gap={8}>
                    <RightSideHeader/>
                 </Stack>
             </Box>
         </Stack>
        </>
    );
};

export default DesktopHeader;
