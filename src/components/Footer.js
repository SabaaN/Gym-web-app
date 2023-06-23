import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo-1.png';

const Footer = () => (
  <Box mt="190px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ ml: '580px' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: 'auto' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" pb="20px">Developed By <b>Saba N</b> </Typography>

    <Typography sx={{ fontSize: { lg: '10px', xs: '10px' } }} mt="5px" textAlign="center" pb="40px">Creds to JavaScript Mastery</Typography>
  </Box>
);

export default Footer;