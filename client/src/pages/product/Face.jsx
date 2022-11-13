import React, { useEffect, useState } from 'react'
import Sidebar from "../../components/Sidebar";
import ProductCard from "../../components/ProductCard";
import { Box ,Flex, SimpleGrid,Select} from '@chakra-ui/react'
import axios from "axios";
import { MakeupObject } from '../../assets/sidebar.value';
import Pagination from '../../components/Pagination';
import { useSearchParams } from 'react-router-dom';

const Face = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  const [makeup, setMakeup] = useState([]);
  const [order,setOrder]=useState("asc")
  const [orderBy,setOrderBy]=useState("name")
  const [page, setPage] = useState(Number(searchParams.get("page"))||1)
  const [totalPages, setTotalPages] = useState(0);
  let getData = () => {
    return axios
      .get(`https://sephorabackend-production.up.railway.app/products?product_type=foundation&page=${page}&limit=20&orderBy=${orderBy}&order=${order}`)
      .then((res) => setMakeup(res.data))
      
  };
  useEffect(() => {
    getData()
    setTotalPages(makeup.length)
  }, [order,orderBy,page]);
  
  useEffect(()=>{setSearchParams({page})},[page])
  const handleChange=(e)=>{
    const options = (e.target.value)
if(options==="phl"){
  setOrder("desc")
  setOrderBy("price")
}
if(options==="plh"){
  setOrder("asc")
  setOrderBy("price")
}
if(options==="a-z"){
  setOrder("asc")
  setOrderBy("name")
}
if(options==="z-a"){
  setOrder("desc")
  setOrderBy("name")
}
if(options==="rating"){
  setOrder("desc")
  setOrderBy("rating")
}
  }

  return (
    <>
    <Box w="30%" ml="70%">
    <Select onChange={handleChange} placeholder='Sorting' fontWeight={"bold"}>
  <option value='phl'>Price High to Low</option>
  <option value='plh'>Price Low to High</option>
  <option value='a-z'>Ascending Order(A-Z)</option>
  <option value='z-a'>Descending Order(Z-A)</option>
  <option value='rating'>Sort by Rating</option>
</Select>  
</Box>
    <Flex>
      <Box w="23%">
        <Sidebar data={MakeupObject} />
      </Box>
      <Box w={{ base: "100%", lg: "77%", xl: "77%" }} border="1px black">
        <Box w={{ sm: "100%", md: "90%", lg: "100%" }} m="auto">
          <SimpleGrid columns={[1, 2, 3, 3, 4]} spacing="10" mt="5" mb="5">
            {makeup &&
              makeup.map((el, index) => (
                <ProductCard
                  key={el.id}
                  id={el._id}
                  image={el.image_link}
                  name={el.name}
                  brand={el.brand}
                  colors={el.product_colors}
                  price={el.price}
                  rating={el.rating}
                />
              ))}
          </SimpleGrid>
        </Box>
      </Box>
      
    </Flex>
    <Box m="auto" w="35%" mb="30px" mt="20px">
      <Pagination total={totalPages} current={page} changePage={setPage} />
      </Box>
    </>
  );
};

export default Face;