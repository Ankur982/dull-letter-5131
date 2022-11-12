import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import {MakeupObject}  from "../assets/sidebar.values"
import { Box ,Flex, SimpleGrid} from '@chakra-ui/react'
import ProductCard from '../components/ProductCard'
import axios from "axios"
// import Rsidebar from '../components/Rsidebar'
const Eye = () => {
  const [makeup,setMakeup]=useState([])
    let getData=()=>{
        return axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow")
        .then((res)=>setMakeup(res.data))
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <Flex>
      <Box w="23%">
        <Sidebar data={MakeupObject} />
        {/* <Rsidebar/> */}
        </Box>
        <Box w={{base:"100%",lg:"77%",xl:"77%"}} border="1px black">
          <h1>eye</h1>
        <Box w={{sm:"100%",md:"90%",lg:"100%"}} m="auto">
        <SimpleGrid columns={[1,2, 3,3, 4]} spacing="10" mt="5" mb="5">
          {makeup&&makeup.map((el, index) => (
            <ProductCard
              key={el.id}
              id={el.id}
              image={el.image_link}
              name={el.name}
              brand={el.brand}
              colors={el.product_colors}
              price={el.price}
              rating={el.rating}
            />
          ))}
        </SimpleGrid>
    </Box>
        </Box>
</Flex>
    
  )
}

export default Eye