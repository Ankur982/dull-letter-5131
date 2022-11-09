import React from 'react';
import { Box,Container,SimpleGrid } from '@chakra-ui/react';
import "./Cart.css"
import Item from './Item';

const Cart = () => {
  return (
        <SimpleGrid className='main-grid' columns={[1,null,1,2]} spacing={4}>
        <Box className='item-box'>
           <Item />
        </Box>
        <Box className='payment-box'>

        </Box>
        </SimpleGrid>
  )
}

export default Cart;