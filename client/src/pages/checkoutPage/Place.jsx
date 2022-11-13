import { Box, Divider, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCreditCard2FrontFill} from "react-icons/bs";

const Place = () => {
  return (
    <Box className='place-main'>
        <Box className='td1'>
            <Text>Merchandise Subtotal</Text>
            <Text fontWeight={600}>$60.35</Text>
        </Box>
        <Box className='td1'>
            <Link to='#'><Text className='td1-1'>Shipping & Handling 🛈</Text></Link>
           <Text fontWeight={600}>$-.--</Text>
        </Box>
        <Box className='td1'>
            <Link to='#'><Text className='td1-1'>Estimated Taxes 🛈</Text></Link>
            <Text fontWeight={600}>$-.--</Text>
        </Box>
        <hr style={{border:"1px solid black"}} />
        <Box className='td2'>
            <Text>Estimated Total</Text>
            <Text>$15.00</Text>
        </Box>
        <Box className='td3'>
            <Text>or payments of $6.75 with <strong>Klarna.</strong></Text>
            <Text mb='0.5rem'>or <strong>afterpay 🛈</strong></Text>
            <Divider />
        </Box>
        <Divider />
        <Box>
            <Text fontSize={'1rem'} fontWeight={700} textAlign='center' mt='0.5rem'>The Sephora Credit Card Program</Text>
            <Box className='cc-p'>
                <BsFillCreditCard2FrontFill size='3rem' />
                <Text>Save $6.75 on this order when you open and use either Sephora Credit Card today*</Text>
            </Box>
            <Text fontSize={'0.8rem'} color={'gray.500'}>*Subject to credit approval. Exclusions apply.</Text>
            <button className='c-btn'>SEE DETAILS</button>
            <Divider />
            <button className='place-btn'>Place Order</button>
        </Box>
    </Box>
  )
}

export default Place;