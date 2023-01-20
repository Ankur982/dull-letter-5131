import { Box, Input, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Checkout.css";
import Place from "./Place";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const { total } = useParams();

  const fullAddress = `Name: ${firstname}${lastname}, Address: ${address},${street},${zip}, Phone: ${phone}`;
  return (
    <Box>
      <Box className="head-check">
        <Text fontSize={"2.5rem"} fontWeight={500}>
          S E P H O R A
        </Text>
      </Box>
      <SimpleGrid columns={[1, null, 1, 2]} spacing={5}>
        <Box className="input-box">
          <Text className="c-head">Checkout</Text>
          <hr style={{ border: "1px solid black" }} />
          <Text fontSize={"1.4rem"} fontWeight={800}>
            Shipping Address
          </Text>
          <Box className="i-box">
            <Box className="name-box">
              <Input
                type="text"
                placeholder="First Name*"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
              <Input
                type="text"
                placeholder="Last Name*"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </Box>
            <Input
              type="text"
              placeholder="Phone*"
              w="19rem"
              mb="1rem"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <Input
              type="text"
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              placeholder="Street Address*"
              mb="1rem"
            />
            <Input
              type="text"
              placeholder="ZIP/Postal Code*"
              w="10rem"
              mb="1rem"
              onChange={(e) => {
                setZip(e.target.value);
              }}
            />
          </Box>
          <Text fontSize={"0.9rem"} fontWeight={600} mt="1rem">
            Ship to FedEx Pickup Location 🛈
          </Text>
          <Link to="#">
            <Text className="loc">Select a location near you</Text>
          </Link>
          <button className="save-btn">Save & Continue</button>
          <Box className="options">
            <hr style={{ border: "1px solid red" }} />
            <Text mt="1rem" fontSize={"1.6rem"} fontWeight={700}>
              Delivery & Gift Options
            </Text>
            <Text mt="0.5rem" color={"red"}>
              Please update your information
            </Text>
          </Box>
          <Box className="options">
            <hr style={{ border: "1px solid red" }} />
            <Text mt="1rem" fontSize={"1.6rem"} fontWeight={700}>
              Payment Method
            </Text>
            <Text mt="0.5rem" color={"red"}>
              Please update your information
            </Text>
          </Box>
          <Box className="options">
            <hr style={{ border: "1px solid red" }} />
            <Text mt="1rem" fontSize={"1.6rem"} fontWeight={700}>
              Review & Place Order
            </Text>
            <Text mt="0.5rem">
              Please review your order information before placing your order.
            </Text>
          </Box>
        </Box>
        <Box className="place-order">
          <Place address={fullAddress} />
        </Box>
      </SimpleGrid>
      <Box className="c-footer">
        <Box className="f-box">
          <Text>© 2022 Sephora USA, Inc. All rights reserved.</Text>
          <Link to="#">
            <Text className="f-link">Terms of Use</Text>
          </Link>
          <Link to="#">
            <Text className="f-link">Privacy Policy</Text>
          </Link>
        </Box>
        <Box className="f-box">
          <Link to="#">
            <Text className="f-link">1-877-737-4672</Text>
          </Link>
          <Link to="#">
            <Text className="f-link">TTY: 1-888-866-9845</Text>
          </Link>
          <Link to="mailto:customerservice@sephora.com">
            <Text className="f-link">customerservices@sephora.com</Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
