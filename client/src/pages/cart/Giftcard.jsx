import { Box, Image, Text, Select } from "@chakra-ui/react";
import React from "react";
import flag from "./images/Flag-Canada.webp";
import { Link } from "react-router-dom";
import { AiFillCreditCard } from "react-icons/ai";
import sephora from "./images/sephora.svg";
import paypal from "./images/payPal.svg";
import master from "./images/masterCard.svg";
import discover from "./images/discover.svg";
import visa from "./images/visa.svg";
import americanex from "./images/americanExpress.svg";

const Giftcard = () => {
  return (
    <Box className="gift-main">
      <Box className="gift-1">
        <Image src={flag} w="1.8rem" h="1rem" alt={"flag"} />
        <Text>Canada Checkout</Text>
      </Box>
      <Box className="gift-2">
        <Box className="gift-2-1">
          <AiFillCreditCard size="3rem" />
          <Box>
            <Text fontSize={"1rem"} fontWeight={600} mt="0.2rem">
              Add a Sephora gift card
            </Text>
            <Text fontSize={"0.8rem"}>
              The super-east gift on everyone's list
            </Text>
          </Box>
        </Box>
        <Box className="gift-2-2">
          <Select border={"1px solid black"} w="5rem">
            <option value="option1">$10</option>
            <option value="option2">$25</option>
            <option value="option3">$40</option>
            <option value="option3">$50</option>
            <option value="option3">$75</option>
            <option value="option2">$100</option>
            <option value="option3">$150</option>
            <option value="option3">$200</option>
            <option value="option3">$250</option>
          </Select>
          <button className="gift-btn">SEE DETAILS</button>
        </Box>
      </Box>
      <Box className="assist">
        <Text fontSize={"1rem"} fontWeight={600}>
          Need Assistance?
        </Text>
        <Text fontSize={"0.9rem"} mt="0.5rem">
          1-877-SEPHORA (1-877-737-4672)
        </Text>
        <Link to="#">
          <Text className="g-link" fontSize={"0.9rem"}>
            TTY: 1-888-866-9845
          </Text>
        </Link>
        <Link to="#">
          <Text className="g-link" mt="0.5rem" fontSize={"0.9rem"}>
            Free retrun shippping or return issue 🛈
          </Text>
        </Link>
        <Text fontSize={"0.9rem"}>We Accept</Text>
        <Box className="card-flex">
          <Image src={sephora} w="2rem" alt={"sephora"} />
          <Image src={paypal} w="2rem" alt={"paypal"} />
          <Image src={visa} w="2rem" alt={"visa"} />
          <Image src={master} w="2rem" alt={"master"} />
          <Image src={discover} w="2rem" alt={"discover"} />
          <Image src={americanex} w="2rem" alt={"americanex"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Giftcard;
