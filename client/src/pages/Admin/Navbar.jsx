import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      p={5}
      bg={"black"}
      color="white"
      justify="space-around"
      border={"1px solid"}
      borderRadius="5px"
    >
      <Box>
        <Link to="/">Products</Link>
      </Box>
      <Box>
        <Link to="/users">Users</Link>
      </Box>
      <Box>
        <Link to="/addproduct">Add a Products</Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
