import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import {MakeupObject}  from "../assets/sidebar.values"
import { Box ,Flex, SimpleGrid} from '@chakra-ui/react'
import ProductCard from '../components/ProductCard'
import axios from "axios"
const Product = () => {
  const [makeup,setMakeup]=useState([])
    let getData=()=>{
        return axios.get("https://makeup-api.herokuapp.com/api/v1/products.json")
        .then((res)=>setMakeup(res.data))
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <Flex>
      <Box w="23%">
        <Sidebar data={MakeupObject} />
        </Box>
        <Box w="77%" border="1px solid black">
        <Box w={{sm:"100%",md:"90%",lg:"100%"}} m="auto">
        <SimpleGrid columns={[1,1, 2,2, 4]} spacing="10" mt="5" mb="5">
          {makeup&&makeup.map((el, index) => (
            <ProductCard
              key={el.id}
              image={el.image_link}
              name={el.name}
              des={el.description}
              id={el.id}
            />
          ))}
        </SimpleGrid>
    </Box>
        </Box>
</Flex>
    
  )
}

export default Product