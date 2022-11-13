import { VStack, Image, Box, Text, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ image,name,brand,colors,price,rating,id }) {
//   const navigate=useNavigate()
  return (
    <>
    <Link to={`/products/${id}`}>
        <VStack
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          w="100%"
          // h="500px"
          // border="1px"
          borderColor="blue.400"
          rounded="xl"
          shadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          // _hover={{ shadow: "md" }}
          backgroundColor={"purple.100"}
          pb={2}
        >
          
            <Image
              src={image}
              alt={name}
              h="200px"
              w="100%"
              borderTopLeftRadius={"10px"}
              borderTopRightRadius={"10px"}
            />
          <Text fontSize="18px" fontWeight={"bold"} color="green.900" w={"100%"} mt="100px">
            {brand}
          </Text>
          <Text color={"black"} fontSize={"20px"} fontFamily={"inherit"} w={"100%"}>{name}</Text>
          <Text color={"black"} backgroundColor={"orange.200"} w={"100%"} p="2">{colors.length} colors</Text>
          <Text fontWeight={"bold"} fontSize={"20px"} color={"tomato"} w={"100%"}>{rating}☆</Text>
          <Text fontWeight={"bold"} color={"red"} fontSize={"23px"} w={"100%"}>${price}</Text>
          
        
        </VStack>
        </Link>
     
    </>
  );
}