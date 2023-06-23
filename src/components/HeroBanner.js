import React from 'react'

import { Box, Stack, Typography, Button } from '@mui/material'
import Banner from '../assets/images/bnr.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "120px", xs: '70px' },
        ml: { sm: '50px' },
      }} position='relative' p='20px'>
      <Typography color='#384EBB' fontWeight='600' fontSize='26px' ml='60px'
      >
        Athletic Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb= '23px' mt='30px' >
        Break Limits,<br /> Build Strength!
      </Typography>
      <Typography fontsize='22px' lineHeight='35px' mb = {3}>
        Explore the Most impactful Exercises
      </Typography>
      <Button className='btnnn' variant='contained' href='#exercises' sx={{ width: '230px', height: '47px' }}> <Typography fontWeight='550'>Find Exercises
      </Typography>
      </Button>
      <img src={Banner} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner