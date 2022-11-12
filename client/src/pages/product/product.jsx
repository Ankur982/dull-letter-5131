import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import ProductCard from "../../components/ProductCard";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { MakeupObject } from "../../assets/sidebar.value";
import { Link } from "react-router-dom";

const Product = () => {
  const [makeup, setMakeup] = useState([]);
  let getData = () => {
    return axios
      .get("https://makeup-api.herokuapp.com/api/v1/products.json")
      .then((res) => setMakeup(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Flex>
      <Box w="23%">
        <Sidebar data={MakeupObject} />
      </Box>
      <Box w={{ base: "100%", lg: "77%", xl: "77%" }} border="1px black">
        <Box w={{ sm: "100%", md: "90%", lg: "100%" }} m="auto">
          <SimpleGrid columns={[1, 2, 3, 3, 4]} spacing="10" mt="5" mb="5">
            {makeup &&
              makeup.map((el, index) => (
                <>
                  <Link to={`/products/${el.id}`}>
                    <ProductCard
                      key={el.id}
                      id={el.id}
                      image={el.image_link}
                      name={el.name}
                      brand={el.brand}
                      colors={el.product_colors}
                      price={el.price}
                      rating={el.rating}
                    />
                  </Link>
                </>
              ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
};

export default Product;
