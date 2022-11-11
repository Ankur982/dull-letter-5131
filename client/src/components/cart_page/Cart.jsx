import React from 'react';
import { Box, SimpleGrid,Text } from '@chakra-ui/react';
import "./Cart.css"
import Item from './Item';
import ItemList from './ItemList';
import PaymentCard from './PaymentCard';
import Giftcard from './Giftcard';

const Cart = () => {
  return (
          <SimpleGrid className='main-grid' columns={[1,null,1,2]} spacing={4}>
            <Box className='item-box'>
              <Item />
              <ItemList />
              <Text color={'red'} fontSize="0.9rem" mt='0.5rem'>Shipping is taking longer due to high demand. 
                Please check your expected delivery date at checkout.
                 Need it sooner? Buy online and pick up in store or get same-day delivery ▸</Text>
            </Box>
            <Box className='payment-box'>
                <PaymentCard />
                <Giftcard />
            </Box>
          </SimpleGrid>
  )
}

export default Cart;