import React, { useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import "./MyOrder.css";
import { AiFillHeart } from "react-icons/ai";
import { ModalComponent } from "../../components/Modal";
const MyOrder = () => {
  const [orderList, setOrderList] = useState();
  const [isData, setIsData] = useState(false);

  const [item, setitem] = useState();

  const [orderArray, setOrderArray] = useState();

  const [product, setProduct] = useState([]);

  const [detail, setDetails] = useState();


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});

  const handleClick = (detail) => {
    setIsModalVisible(true);
    setSelectedBox(detail);
  };

  useEffect(() => {
    getUserId();
  }, []);


  const token = JSON.parse(localStorage.getItem("token")) || null;

  const handleProductDetails = (id) => {
    fetch(`https://sephora-backend.onrender.com/products/find/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

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
        getOrderData(data._id);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const getOrderData = (id) => {
    fetch(`https://sephora-backend.onrender.com/orders/find/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
        setIsData(true);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const getItem = (id) => {
    fetch(`https://sephora-backend.onrender.com/products/find/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const handleOrderDetails = (orderedItem) => {
    setOrderArray(orderedItem);
  };



  return (
    <div style={{ marginBottom: "50px" }}>
      <div id="my_account_order_cont">
        <p className="my_account_order_txt">
          <a href="/">My Account</a> / Order Information
        </p>
      </div>
      <hr className="hr_line" />

      <div id="my_account">
        <div id="my_acc_detail">
          <h1>Order Information</h1>
        </div>
        <div>
          <button className="my_acc_btn1" id="account_home_btn">
            ACCOUNT HOME
          </button>
          <button className="my_acc_btn2" id="logout_btn">
            LOG OUT
          </button>
        </div>
      </div>

      <hr className="hr_line" />

      <div className="your_section">
        <h1 className="section_txt">Active Orders</h1>
        <div id="your_order_section">
          {isData ? (
            <>
              {orderList &&
                orderList.map((e) => (
                  <div key={e._id}>
                    <div
                      style={{
                        display: "flex",
                        gap: "50px",
                        margin: "auto",
                        marginTop: "20px",
                        textAlign: "center",
                      }}
                    >
                      <h1> Order Id: {e._id}</h1>
                      <p>Order Status: {e.status}</p>
                      <p>Order Amount: {e.amount}</p>
                      <p>Order created at: {e.createdAt}</p>
                      <Button
                        colorScheme="teal"
                        size="md"
                        onClick={() => handleOrderDetails(e.products)}
                      >
                        Check Details
                      </Button>
                    </div>
                  </div>
                ))}
              <div>
                <Heading as="h3" size="lg" textAlign="center" m="40px">
                  {" "}
                  Order Products Details{" "}
                </Heading>
                {orderArray?.map((e) => (
                  <div
                    key={e._id}
                    style={{
                      display: "flex",
                      gap: "100px",
                      textAlign: "start",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "50px",
                        textAlign: "center",
                        marginLeft: "350px",
                      }}
                    >
                      <h1>Product Id: {e._id}</h1>
                      <p>Quantity: {e.quantity}</p>
                    </div>
                    <div>
                      <Button
                        colorScheme="teal"
                        size="md"
                        onClick={() => handleProductDetails(e.productId)}
                      >
                        Check Product Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {detail && (
                <div>
                  <SimpleGrid
                    w={"90%"}
                    columns={[1, 2, 3, 4]}
                    padding={"10px"}
                    spacing="20px"
                    m="auto"
                  >
                    {
                      <Box
                        border={"1px solid rgb(169, 166, 166)"}
                        bg="white"
                        height={["390px", "470px", "550px", "480px"]}
                        fontWeight={470}
                        w="100%"
                        m="auto"
                        boxShadow="md"
                        _hover={{
                          cursor: "pointer",
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}
                      >
                        <Text
                          mb={"-1"}
                          bg="#f6f6f6"
                          fontSize={"26px"}
                          fontWeight="500"
                          w="10px"
                          float={"right"}
                          mr="2"
                          mt={"0"}
                          borderRadius="50px"
                          _hover={{
                            color: "red",
                          }}
                        >
                          x
                        </Text>
                        <Image
                          h={["40%", "50%", "60%", "60%"]}
                          w={"85%"}
                          m="auto"
                          mt={"7"}
                          src={detail.image_link}
                          alt={detail.name}
                        />
                        <Text
                          textAlign={"left"}
                          ml={0}
                          width={"90%"}
                          m={"auto"}
                          mt={5}
                          _hover={{
                            w: "90%",
                          }}
                        >
                          {detail.name}
                        </Text>
                        <Text fontWeight={500} textAlign={"left"} ml={4}>
                          ${detail.price}
                          <AiFillHeart
                            style={{
                              fontSize: "23px",
                              float: "right",
                              marginRight: "16",
                              color: "red",

                              marginTop: "50px",
                            }}
                          />
                        </Text>
                        <br />
                        <Button
                          colorScheme={"green"}
                          bg="red"
                          color="white"
                          mt={4}
                          float="left"
                          ml={4}
                          size="md"
                          onClick={() => handleClick(detail)}
                        >
                          View Details
                        </Button>
                      </Box>
                    }
                    <ModalComponent
                      data={selectedBox}
                      isOpen={isModalVisible}
                      setIsOpen={setIsModalVisible}
                    />
                  </SimpleGrid>
                </div>
              )}
            </>
          ) : (
            <p className="int_txt">You currently have no outstanding orders.</p>
          )}
        </div>
      </div>

      <hr className="hr_line" />

      <div className="your_section">
        <h1 className="section_txt">Completed Orders</h1>
        <div id="your_subs_section">
          <p className="int_txt">You currently have no completed orders.</p>
        </div>
      </div>

      <hr className="hr_line" />
    </div>
  );
};

export default MyOrder;
