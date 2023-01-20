import React, { useState } from "react";
import "./Cart.css";
import { Box, Text, Button, Image, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CartItem = ({ name, image, price, brand, product_id, id }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <div>
      <Box className="sh-l2">
        <Box>
          <Image src={image} alt="img" />
        </Box>
        <Box className="sh-l2-1">
          <Box className="sh-l2-1-1">
            <Box>
              <Link className="sh-link" to="#">
                <Text fontWeight={600}>{brand}</Text>
                <Text>{name}</Text>
              </Link>
              <Text color={"gray"} fontSize={"0.8rem"}>
                {product_id}
              </Text>
            </Box>
            <Box>
              <Text fontWeight={600}>$ {Number(quantity) * price}</Text>
            </Box>
          </Box>
          <Box className="sh-l2-1-2">
            <Box className="sh-btns">
              <Select w="4.5rem" value={quantity} onChange={handleChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Select>
              <Button size={"sm"} variant="link" color={"blue"}>
                Move to Loves
              </Button>
              <Button size={"sm"} variant="link" color={"blue"}>
                Remove
              </Button>
            </Box>
            <Box>
              <button className="change-btn">Change Method</button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CartItem;
