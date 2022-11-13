import { Box, Input, Text,Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import "./Cart.css";
import {Link} from "react-router-dom";

const PaymentCard = ({checkout,total}) => {
    const [promo,setPromo] = useState("");
    const [updatedTotal ,setUpdatedTotal] = useState("");

    const handleChange =(e) =>{
        setPromo(e.target.value);
    };

    
    //Promocode - FEST15 

    const ValidPromo =()=>{
        if(promo === 'FEST15'){
            total = (+total * (85/100)).toFixed(2);
        }
       setUpdatedTotal(total)
    }
  return (
    <Box>
        <Box className='total-details'>
            <Box className='td1'>
                <Text>Merchandise Subtotal</Text>
                <Text fontWeight={600}>$ {total}</Text>
            </Box>
            <Box className='td1'>
                <Link to='#'><Text className='td1-1'>Shipping & Handling 🛈</Text></Link>
                <Text fontWeight={600}>TBD</Text>
            </Box>
            <Box className='td1'>
                <Link to='#'><Text className='td1-1'>Estimated Tax & Other Fees 🛈</Text></Link>
                <Text fontWeight={600}>TBD</Text>
            </Box>
            <Box className='td2'>
                <Text>Estimated Total</Text>
                <Text>$ {updatedTotal ? updatedTotal : total}</Text>
            </Box>
            <Box className='td3'>
                <Text>or payments of $6.75 with <strong>Klarna.</strong></Text>
                <Text>or <strong>afterpay 🛈</strong></Text>
                <Text color={'gray.500'}>Shipping and taxes calculated during checkout</Text>
            </Box>
            <Box className='td-btn'>
                <button className='td-btn1' onClick={()=> checkout()}>Checkout Shipped Items</button>
                <br />
                <button className='td-btn2'>Pay with Paypal</button>
            </Box>
        </Box>
        <Box className='promo'>
            <Text fontSize={"0.9rem"} textAlign={"right"}>View featured offers</Text>
            <Input type='text'

                onChange={handleChange}
                value={promo}
                placeholder='Apply code FEST15'
            />
            <Button size={"md"} colorScheme={"red"} mt='1rem' onClick={()=>ValidPromo()}>APPLY PROMO</Button>
        </Box>
    </Box>
  )
}

export default PaymentCard;