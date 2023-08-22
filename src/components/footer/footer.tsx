import React from 'react';
import { Stack } from '@chakra-ui/react';
import FooterMain from "./footerMain";

const Footer = () => {
  return (
    <Stack width={'full'}  bgColor={'brand.footerColor'}>
      <FooterMain/>
    </Stack>
  );
};

export default Footer;
