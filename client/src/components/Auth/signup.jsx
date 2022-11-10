import React from 'react'
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
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthcontext';


export default function Signup() {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [err,setErr]= useState("")
    const Navigate= useNavigate()
    const [showPassword, setShowPassword] = useState(false)
       const {signUp}= useUserAuth()

    const handleSignup=async (e)=>{
     e.preventDefault()
     setErr("")
     try{
       await signUp(email,password)
       Navigate("/login")
     }
     catch(e){
     setErr(e.message)
     }


    }
  return (
    <div>
       <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={'white'}>
          {
            err && <Alert status='error'>
            <AlertIcon />
            <AlertTitle>{err}</AlertTitle>
            <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
          </Alert>   
          }

      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
              <form onSubmit={handleSignup}>
          <Stack spacing={4}>
           
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input  onChange={e=>setEmail(e.target.value)}  type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input onChange={e=>setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
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
                bg={'black'}
                color={'white'}
                _hover={{
                  bg: 'black',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already have an account?<Link to="/login"><Text as="u">Login</Text></Link>
              </Text>
            </Stack>

         </Stack>
         </form>
        </Box>
        
      
      </Stack>
    </Flex>
    </div>
  )
}
