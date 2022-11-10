import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import { auth } from '../../firebase';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { GoogleAuthProvider } from "firebase/auth";
import Dashboard from '../Dashboard';


export default function Login() {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const navigate= useNavigate()
    const provider = new GoogleAuthProvider();


    const handleLogin=(e)=>{
     e.preventDefault()
     signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate("/dashboard")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      console.log(errorMessage)
  });

    }

function signInGoogle(){
   signInWithPopup(auth,provider).then((res)=>{
     console.log(res)
    const pname= res.user.displayName;
    const pemail= res.user.email;
    const profilePic= res.user.photoURL;
    console.log(pname,pemail,profilePic)
    navigate("/dashboard")
   }).catch((err)=>{
    console.log(err)
   })
   } 

  return (
    <div>
      {/* <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <Input onChange={e=>setEmail(e.target.value)} type="email" placeholder="email"/>
            <Input onChange={e=>setPassword(e.target.value)} type="password" placeholder="password"/>
            <Button backgroundColor="black" color="white" type="submit">Sign In</Button>
        </form>
    <Center p={8}>
      <Button
      onClick={signInGoogle}
        // w={'full'}
        // maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center> */}

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
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
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
    <Center py={2}>Don't have an account?<Link to="/signup"> <Text as="u">SignUp</Text></Link> </Center>
        </Box>
      </Stack>
      
    </Flex>
    </div>
  )
}
