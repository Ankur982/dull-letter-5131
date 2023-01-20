import { Box, Button, Divider, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";

const Place = ({ address }) => {
  const { total } = useParams();
  const [orderItem, setOrderItem] = useState();
  const [userId, setUserId] = useState();
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token")) || null;
  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = () => {
    fetch("https://sephora-backend.onrender.com/users/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserId(data._id);
        getCardData(data._id);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const getCardData = (id) => {
    fetch(`https://sephora-backend.onrender.com/carts/find/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderItem(data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const addToOrder = (data) => {
    fetch("http://localhost:8080/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Order Placed Successfully");
        navigate("/myorders");
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const handleOrderPlace = () => {
    let arr = [];
    orderItem.map((e) =>
      arr.push({
        productId: e.products[0].productId,
        quantity: e.products[0].quantity,
      })
    );
    const initState = {
      userId: userId,
      products: arr,
      amount: total,
      address: address,
      status: "success",
    };
    addToOrder(initState);
  };

  return (
    <Box className="place-main">
      <Box className="td1">
        <Text>Merchandise Subtotal</Text>
        <Text fontWeight={600}>$ {total}</Text>
      </Box>
      <Box className="td1">
        <Link to="#">
          <Text className="td1-1">Shipping & Handling 🛈</Text>
        </Link>
        <Text fontWeight={600}>$ 0</Text>
      </Box>
      <Box className="td1">
        <Link to="#">
          <Text className="td1-1">Estimated Taxes 🛈</Text>
        </Link>
        <Text fontWeight={600}>$ 0</Text>
      </Box>
      <hr style={{ border: "1px solid black" }} />
      <Box className="td2">
        <Text>Estimated Total</Text>
        <Text>$ {total}</Text>
      </Box>
      <Box className="td3">
        <Text>
          or payments of $6.75 with <strong>Klarna.</strong>
        </Text>
        <Text mb="0.5rem">
          or <strong>afterpay 🛈</strong>
        </Text>
        <Divider />
      </Box>
      <Divider />
      <Box>
        <Text fontSize={"1rem"} fontWeight={700} textAlign="center" mt="0.5rem">
          The Sephora Credit Card Program
        </Text>
        <Box className="cc-p">
          <BsFillCreditCard2FrontFill size="3rem" />
          <Text>
            Save $6.75 on this order when you open and use either Sephora Credit
            Card today*
          </Text>
        </Box>
        <Text fontSize={"0.8rem"} color={"gray.500"}>
          *Subject to credit approval. Exclusions apply.
        </Text>
        <Button className="c-btn">SEE DETAILS</Button>
        <Divider />
        <Button
          colorScheme="teal"
          className="place-btn"
          onClick={() => handleOrderPlace()}
        >
          Place Order
        </Button>
      </Box>
    </Box>
  );
};

export default Place;
