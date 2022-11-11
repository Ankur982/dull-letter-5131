import { Box, Text,Divider,Image,} from '@chakra-ui/react';
import React from 'react'

const Additional = () => {
  return (
    <Box className='additional-main'>
        <Text fontSize={'1.2rem'} fontWeight={600}>Add These for Under $15</Text>
        <Box className='sh-l2'>
          <Box>
              <Image src= {"https://www.sephora.com/productimages/sku/s2464048-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=97"} alt="img"/>
          </Box>
          <Box className='sh-l2-1'>
            <Box className='sh-l2-1-1'>
              <Box>
                <Text fontSize={'0.9rem'} fontWeight={600}>SEPHORA COLLECTION</Text>
                <Text fontSize={'0.8rem'}>Big By Definition Defining & Volumizing Mascara</Text>
                <Text fontSize={'0.8rem'} color='gray.500'>ITEM 2377398</Text>
                <Text fontSize={'0.8rem'}>Size: 0.61 oz/ 17.29 g</Text>
              </Box>
              <Box>
                <Text fontWeight={600}>$15.00</Text>
                <button className='add-btn'>Add</button>
              </Box>
            </Box>
          </Box>
      </Box>
      <Divider color={"gray.400"} />
    </Box>
  )
}

export default Additional;