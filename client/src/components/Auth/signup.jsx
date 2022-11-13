import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthcontext";

export default function Signup() {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { signUp } = useUserAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warn("Fields cant be empty !", {
        position: "top-right",
        theme: "colored",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (password.length < 6) {
      toast.warn("Password should be of atleast 6 letters", {
        position: "top-right",
        autoClose: 1000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    try {
      await signUp(email, password);
      toast.success("Account created, redirecting to Login", {
        position: "top-right",
        autoClose: 1000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      const res = await fetch(
        "https://sephorabackend-production.up.railway.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: `${fname} ${lname}`,
            email: email,
            password: password,
          }),
        }
      );
      setTimeout(() => {
        Navigate("/login");
      }, 1000);
    } catch (e) {
      // toast.error("Wrong Credentials", {
      //   position: "top-right",
      //   autoClose: 1000,
      //   theme: "colored",
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
    }
  };
  return (
    <div>
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"white"}>
        {/* {
            err && <Alert status='error'>
            <AlertIcon />
            <AlertTitle>{err}</AlertTitle>
            <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
          </Alert>   
          } */}

        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form method="POST" onSubmit={handleSignup}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        value={fname}
                        onChange={(e) => setfName(e.target.value)}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        value={lname}
                        onChange={(e) => setlName(e.target.value)}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"black"}
                    color={"white"}
                    _hover={{
                      bg: "black",
                    }}
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already have an account?
                    <Link to="/login">
                      <Text as="u">Login</Text>
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </form>
          </Box>

          <ToastContainer theme="colored" />
        </Stack>
      </Flex>
    </div>
  );
}
