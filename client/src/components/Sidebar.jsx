import React from 'react'
import {Box,Text,Flex, Heading} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
const Sidebar = ({data}) => {
  return (
  
      <Box>
        <Heading textAlign={"left"} ml="40px" fontSize={"30px"} mb="25px">{data.value}</Heading>
        {
            data.links.map((el)=>{
                let [text, link] = el;
                return (
                <Link to={link}><Text textAlign={"left"} ml="40px" fontSize={"20px"} mb="20px">{text}</Text></Link> 
            )  
            })
        }
        </Box>
        

  )
}

export default Sidebar