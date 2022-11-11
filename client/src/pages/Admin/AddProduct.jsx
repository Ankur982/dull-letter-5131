import { useState } from "react";
import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

const initalDetails = {
  brand: "",
  name: "",
  price: "",
  image_link: "",
  description: "",
  category: "",
};

function AddProduct() {
  const [form, setForm] = useState(initalDetails);

  const handleChange = (e) => {
    const { name: key, value } = e.target;
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm(initalDetails);
  };

  return (
    <Box p={5} mb={20}>
      <Box mb={5} textAlign="center">
        <Text fontSize="3xl">Add a Products</Text>
      </Box>
      <Box pl={5} w={"50%"}>
        <form onSubmit={handleSubmit}>
          <FormLabel>Product Brand</FormLabel>
          <Input
            name="brand"
            value={form.brand}
            onChange={handleChange}
            placeholder="Brand Name"
          />
          <FormLabel>Product Name</FormLabel>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
          />
          <FormLabel>Product Price</FormLabel>
          <Input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Product Price"
          />
          <FormLabel>Product Image</FormLabel>
          <Input
            name="image_link"
            value={form.image_link}
            onChange={handleChange}
            placeholder="Product Image URL"
          />
          <FormLabel>Product Description</FormLabel>
          <Input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product Description"
          />
          <FormLabel>Product Category</FormLabel>
          <Input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Product Category"
          />
          <Button colorScheme="teal" type="submit">
            Add Product
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default AddProduct;
