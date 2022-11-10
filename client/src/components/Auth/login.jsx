import React from 'react'
import { FcGoogle, FcPhoneAndroid } from 'react-icons/fc';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Dashboard from '../Dashboard';
import { useUserAuth } from '../../context/UserAuthcontext';


export default function Login() {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const navigate= useNavigate()
    const {logIn,googleSignIn}= useUserAuth()


    const handleLogin= async (e)=>{
     e.preventDefault()
     try{
       await logIn(email,password)
      navigate("/dashboard")
     }
    catch(error){
    const errorCode = error.code;
    const errorMessage = error.message;
      console.log(errorMessage)
  };

    }

async function signInGoogle(e){
  e.preventDefault()
  try{
  await googleSignIn();
  navigate("/dashboard")
  }catch(err){
      console.log(err.message)
  }
   } 

  return (
    <div>
<Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
            <form onSubmit={handleLogin}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={e=>setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input  onChange={e=>setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                {/* <Checkbox>Remember me</Checkbox> */}
                <Link color={'black'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'black'}
                color={'white'}
                type="submit"
                _hover={{
                  bg: 'pink',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
          <Center>or</Center>
          <Center>
      <Button
      onClick={signInGoogle}
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
    <Link to="/phonelogin">
    <Center mt={2}>
      <Button
        w={'full'}
        maxW={'md'}
        colorScheme={'green'}
        leftIcon={<FcPhoneAndroid/>}>
        <Center>
          <Text>Sign in with Phone</Text>
        </Center>
      </Button>
    
    </Center>
    </Link>
    <Center py={2}>Don't have an account?<Link to="/signup"> <Text as="u">SignUp</Text></Link> </Center>
    </form>
        </Box>
      </Stack>
      
    </Flex>
    </div>
  )
}
