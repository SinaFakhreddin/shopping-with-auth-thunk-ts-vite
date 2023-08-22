import React from 'react';
import {Text} from "@chakra-ui/react";

const Logo = () => {



    return (
        <>
            <Text color={'gray.800'} fontWeight={'bold'}>
                    PASARGAD {" "}
                <Text as={'span'} color={'brand.primary'} fontWeight={"semibold"}>Project</Text>
            </Text>
        </>
    );
};

export default Logo;
