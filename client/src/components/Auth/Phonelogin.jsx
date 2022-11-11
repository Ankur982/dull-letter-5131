// import React from 'react'
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
// import {
//     Flex,
//     Box,
//     FormControl,
//     FormLabel,
//     Stack,
//     Button,
//     Heading,
 
//     useColorModeValue,
//     Center,
//   } from '@chakra-ui/react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Phonelogin() {
// const[number,setNumber]= useState("")

//    function getOtp(e){
// e.prevent.Default();
// console.log(number)

//    } 
//   return (
//     <>
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')}>
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//         <Stack align={'center'}>
//           <Heading fontSize={'4xl'}>Sign in with Phone Number</Heading>
//         </Stack>
//         <Box
//           rounded={'lg'}
//           bg={useColorModeValue('white', 'gray.700')}
//           boxShadow={'lg'}
//           p={8}>
//           <Stack spacing={6}>
//            <form onSubmit={getOtp}>
//             <FormControl id="password">
//               <FormLabel>Phone Number</FormLabel>
//              {/* <PhoneInput
//              defaultCountry='IN'
//               value={number}
//               onChange={setNumber}

//              /> */}
//             </FormControl>
//             <Center p={4}   direction={['column', 'row']}>
//                 <Link to="/login">
//             <Button m={2}
//                 bg={'red.400'}
//                 color={'white'}>
//                Cancel
//               </Button>
//               </Link>
//               <Button
//                 m={2}
//                 bg={'black'}
//                 type="submit"
//                 color={'white'}
//                 _hover={{
//                   bg: 'blue.500',
//                 }}>
//                 Send OTP
//               </Button>
//             </Center>
//             </form>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
    
//     </>
//   )
// }
