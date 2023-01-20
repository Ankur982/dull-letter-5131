import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import "./Cart.css";
import Item from "./Item";
import ItemList from "./ItemList";
import PaymentCard from "./PaymentCard";
import Giftcard from "./Giftcard";
import CartItem from "./CartItem";
import Additional from "./Additional";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [userId, setUserId] = useState();
  const [allCartData, setAllCartData] = useState([]);

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
        data?.map((e, i) => getProductDetails(e.products[0].productId));
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getCardData(userId);
    }, 1000);
  }, [userId]);

  const getProductDetails = (id) => {
    fetch(`https://sephora-backend.onrender.com/products/find/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllCartData((allCartData) => [...allCartData, data]);
        setTotal((price) => price + Number(data.price));
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  console.log(allCartData);

  const checkout = (total) => {
    navigate(`/checkout/${total}`);
  };

  return (
    <SimpleGrid className="main-grid" columns={[1, null, 1, 2]} spacing={4}>
      <Box className="item-box">
        <Item />
        <ItemList />
        {allCartData &&
          allCartData.map((el, index) => (
            <CartItem
              key={el._id}
              id={el.id}
              product_id={el.id}
              image={el.image_link}
              name={el.name}
              brand={el.brand}
              price={el.price}
            />
          ))}
        <Additional />
        <Text color={"red"} fontSize="0.9rem" mt="0.5rem">
          Shipping is taking longer due to high demand. Please check your
          expected delivery date at checkout. Need it sooner? Buy online and
          pick up in store or get same-day delivery ▸
        </Text>
      </Box>
      <Box className="payment-box">
        <PaymentCard checkout={checkout} total={total} />
        <Giftcard />
      </Box>
    </SimpleGrid>
  );
};

export default Cart;
