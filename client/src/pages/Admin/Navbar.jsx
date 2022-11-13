import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

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
        <NavLink to={"/admin"}>Products</NavLink>
      </Box>
      <Box>
        <NavLink to="/users">Users</NavLink>
      </Box>
      <Box>
        <NavLink to="/admin/addproduct">Add a Products</NavLink>
      </Box>
      <Box>
        <NavLink to="/admin/orders">Orders</NavLink>
      </Box>
    </Flex>
  );
}

export default Navbar;
