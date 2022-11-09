import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import "./Cart.css";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Link } from 'react-router-dom';
const ItemList = () => {
  return (
    <Box className='item-list-box'>
      <Text fontSize={'1.2rem'} fontWeight={600}>Get It Shipped (1)</Text>
      <Box className='sh-l1'>
          <Box className='sh-l1-1'>
            <MdOutlineLocalShipping size={'1.7rem'} />
            <span>Beauty Insiders enjoy<strong> FREE standard shipping</strong> on all orders.*</span>
          </Box>
          <Box className='sh-l1-2'>
              <Box className='sh-l1-2-1'>
                <Link to="#">
                  <Text>Get <strong>2</strong> free sample with every order</Text>
                  <Text>SELECT YOUR SAMPLE(S)</Text>
                </Link>
              </Box>
              <Box className='sh-l1-2-1'>
                <Link to="#">
                  <Text>You now have <strong>0</strong> Beauty Insider points</Text>
                  <Text>REDEEM YOUR REWARDS</Text>
                </Link>
              </Box>
          </Box>
      </Box>
      <Box className='sh-l2'>
          <Box className='sh-l2-1'>
              <Image src= {"https://www.sephora.com/productimages/sku/s2377398-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=97"} alt="img"/>
          </Box>
          <Box>

          </Box>
      </Box>
    </Box>
  )
}

export default ItemList;