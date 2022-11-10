import React from 'react'
import {Box,Text,Flex, Heading} from "@chakra-ui/react"
const Sidebar = ({data}) => {
  return (
  
      <Box>
        <Heading textAlign={"left"} ml="40px" fontSize={"30px"} mb="25px">{data.value}</Heading>
        {
            data.links.map((el)=>{
                let [text, link] = el;
                return (
                <a href={link}><Text textAlign={"left"} ml="40px" fontSize={"20px"} mb="20px">{text}</Text></a>
            )  
            })
        }
        </Box>
        

  )
}

export default Sidebar