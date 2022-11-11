import {
  Box,
  Center,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProducts } from "../../store/AdminRoutes/AllProducts/adminProduct.action";

function Products() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.adminProducts);
  console.log(data);

  useEffect(() => {
    dispatch(getAdminProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <Center h="500px">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  if (error) {
    return <h3>Something went Wrong</h3>;
  }

  return (
    <Box p={5}>
      <Box>
        <Text fontSize="3xl">All Products</Text>
      </Box>
      <Grid textAlign={"center"} p={2} templateColumns="repeat(5 ,1fr)" gap={6}>
        {data.map((e) => (
          <GridItem border={"1px solid"} borderRadius="20px" p={2}>
            <Image width="100%" src={e.image_link} />
            <Box display="flex" m={2}>
              <Text as="b" fontSize={"lg"}>
                Brand:
              </Text>
              <Text fontSize={"lg"}>{e.brand}</Text>
            </Box>
            <Box display="flex" m={2}>
              <Text as="b" fontSize={"md"}>
                Name:
              </Text>
              <Text fontSize={"md"}>{e.name}</Text>
            </Box>
            <Box display="flex" m={2}>
              <Text as="b" fontSize={"md"}>
                Price:$
              </Text>
              <Text fontSize={"md"}>{e.price}</Text>
            </Box>
            <Box display="flex" m={2}>
              <Text as="b" fontSize={"md"}>
                Category
              </Text>
              <Text fontSize={"md"}>{e.category}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
