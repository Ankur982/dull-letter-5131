import { Link, VStack, Image, Box, Text, Heading, Button } from "@chakra-ui/react";
import React from "react";
// import { Navigate, useNavigate } from "react-router-dom";

export default function ProductCard({ image,name,des,id }) {
//   const navigate=useNavigate()
  return (
    <>
        <VStack
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          textAlign="start"
          w="100%"
          h="500px"
          // border="1px"
          borderColor="blue.400"
          rounded="xl"
          // _hover={{ shadow: "md" }}
        >
          
            <Image
              src={image}
              alt="Postman"
              mt="3"
             
              w="100%"
            />
          <Heading fontSize={"25px"} textAlign={"start"}>{name}</Heading>
          <Box h="110px" border={"1px black"} overflow="hidden">
          <Text fontSize="18px" pb="3">
            {des}
          </Text>
          </Box>
          <Button color={"blue"} bg="white" border={"1px solid blue"} borderRadius="20px">Read More</Button>
        </VStack>
     
    </>
  );
}