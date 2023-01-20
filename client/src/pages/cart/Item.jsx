import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./Cart.css";
import { FaCreditCard } from "react-icons/fa";

const Item = () => {
  return (
    <Box>
      <Text className="head-basket">My Basket</Text>
      <Box className="creditcard">
        <Text fontWeight={"700"} fontSize={"1rem"}>
          The SEPHORA Credit Card Program
        </Text>
        <Box className="credit-flex">
          <FaCreditCard size={"2rem"} />
          <Text fontSize={"0.9rem"}>
            Save 25% on this order when you open and use either SEPHORA Credit
            Card today*
          </Text>
          <button className="credit-btn">SEE DETAILS</button>
        </Box>
        <Text fontSize={"0.8rem"} color="gray.500">
          *Subject to credit approval. Exclusions apply.
        </Text>
      </Box>
    </Box>
  );
};

export default Item;
