import React from "react";
import { ReactNode } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  Stack,

} from "@chakra-ui/react";

export default function ANavbar() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>SEPHORA</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
           
                    <Button  onClick={() => loginWithRedirect()} px={4} bg={"black"} color={"white"}>
                    Login
                  </Button>
                   <Button  onClick={() => logout({ returnTo: window.location.origin })} px={4} bg={"black"} color={"white"}>
                   Logout
                 </Button>
                
             
             
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
