import { Link, VStack, Image, Box, Text, Heading, Button } from "@chakra-ui/react";
import React from "react";
// import { Navigate, useNavigate } from "react-router-dom";

export default function ProductCard({ image,name,brand,colors,price,rating }) {
//   const navigate=useNavigate()
  return (
    <>
        <VStack
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          textAlign="start"
          w="100%"
          // h="500px"
          // border="1px"
          borderColor="blue.400"
          rounded="xl"
          // _hover={{ shadow: "md" }}
        >
          
            <Image
              src={image}
              alt={name}
              mt="3"
              h="200px"
              w="100%"
            />
          <Text fontSize="18px" fontWeight={"20px"}>
            {brand}
          </Text>
          <Text>{name}</Text>
          <Text color={"gray"}>{colors.length} colors</Text>
          <Text>{rating}</Text>
          <Text fontWeight={"bold"} color={"red"}>${price}</Text>
          
        
        </VStack>
     
    </>
  );
}