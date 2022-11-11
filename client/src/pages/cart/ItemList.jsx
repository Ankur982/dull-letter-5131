import { Box, Image, Select, Text, Button, Divider } from '@chakra-ui/react';
import React from 'react';
import "./Cart.css";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Link } from 'react-router-dom';
import Additional from './Additional';



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
          <Box>
              <Image src= {"https://www.sephora.com/productimages/sku/s2377398-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=97"} alt="img"/>
          </Box>
          <Box className='sh-l2-1'>
            <Box className='sh-l2-1-1'>
              <Box>
                <Link className='sh-link' to='#'>
                <Text fontWeight={600}>SEPHORA COLLECTION</Text>
                <Text>Translucent Loose Setting Powder</Text>
                </Link>
                <Text fontSize={'0.8rem'} color='gray.500'>ITEM 2377398</Text>
                <Text fontSize={'0.8rem'}>Size: 0.61 oz/ 17.29 g</Text>
              </Box>
              <Box>
                <Text fontWeight={600}>$15.00</Text>
              </Box>
            </Box>
            <Box className='sh-l2-1-2'>
              <Box className='sh-btns'>
                <Select w='4.5rem'>
                  <option value='option1'>1</option>
                  <option value='option2'>2</option>
                  <option value='option3'>3</option>
                  <option value='option3'>4</option>
                  <option value='option3'>5</option>
                </Select>
                <Button size={'sm'} variant='link' color={'blue'}>Move to Loves</Button>
                <Button size={'sm'} variant='link' color={'blue'}>Remove</Button>
              </Box>
              <Box>
              <button className='change-btn'>Change Method</button>
              </Box>
            </Box>
          </Box>
      </Box>
      <Divider color={"gray.400"} />
      <Additional />
    </Box>
  )
}

export default ItemList;