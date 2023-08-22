import React, { useState } from 'react';
import { Box, IconButton, Stack, Text } from '@chakra-ui/react';
import {BsTwitter , BsInstagram} from "react-icons/bs"
import {BiLogoFacebookCircle} from "react-icons/bi"
import {MdEmail} from "react-icons/md"
import { Input } from '@chakra-ui/input';
import Logo from "../logo";

const FooterMain = () => {
  const [color, setColor] = useState(null);
  const [enterEmail, setEnterEmail] = useState(false);
  const icons = [<BsTwitter/> , <BiLogoFacebookCircle/> , <BsInstagram/>]

  return (
    <Stack py={"2rem"} justifyContent={"space-evenly"}  direction={'row'} margin={'auto'} width={'80%'} >
      <Stack  gap={"1rem"}>
      <Box><Logo/></Box>
      <Text color={'gray.500'} fontSize={'small'}>&copy; 2023 PASARGAD. All Right reserved </Text>
      <Stack direction={'row'}>
        {
          icons.map((icon, index)=>(<IconButton
            key={index}
            bgColor={`${color===index ? 'brand.primary' : ""}`}
            onMouseEnter={()=>setColor(index)}
            onMouseLeave={()=>setColor(null)}
            size={'sm'}
            variant={'outline'}
            isRound={true}
            icon={icon}
          />))}
      </Stack>
      </Stack>
      <Stack  gap={"1rem"}>
        <Text as={'h6'} fontWeight={'medium'} size={'xs'}>Company</Text>
        <Stack gap={'.5rem'}>
          <Text fontSize={'sm'} color={'gray.500'}>Abut Us</Text>
          <Text fontSize={'sm'} color={'gray.500'}>Contact Us</Text>
          <Text fontSize={'sm'} color={'gray.500'}>Testimonials</Text>
        </Stack>
      </Stack>
      <Stack  gap={"1rem"}>
        <Text as={'h6'} fontWeight={'medium'} size={'xs'}>Support</Text>
        <Stack gap={'.5rem'}>
          <Text fontSize={'sm'} color={'gray.500'}>Help Center</Text>
          <Text fontSize={'sm'} color={'gray.500'}>Privacy and Policy</Text>
          <Text fontSize={'sm'} color={'gray.500'}>Term Of Service</Text>
        </Stack>
      </Stack>
      <Stack  gap={"1rem"}>
        <Text as={'h6'} fontWeight={'medium'} size={'xs'}>Get The Best Deals</Text>
        <Stack gap={'.5rem'} direction={'row'} alignItems={'center'}>
          <Input
            focusBorderColor={'brand.primary'}
            rounded={"lg"}
            size={'sm'}
          placeholder={'Enter Your Email Address'}
          />
          <IconButton
            size={"sm"}
            color={'white'}
            bgColor={"brand.primaryDark"}
          icon={<MdEmail/>}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FooterMain;
