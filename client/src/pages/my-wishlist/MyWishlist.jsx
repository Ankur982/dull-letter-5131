import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ModalComponent } from "../../components/Modal";
import "./MyWishlist.css";
const MyWishlist = () => {
  const [wishlistList, setWishlistList] = useState();
  const [isData, setIsData] = useState(false);

  const [item, setitem] = useState();

  const [product, setProduct] = useState();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});

  const handleClick = (product) => {
    setIsModalVisible(true);
    setSelectedBox(product);
  };

  const token = JSON.parse(localStorage.getItem("token")) || null;

  useEffect(() => {
    getUserId();
  }, []);

  //.................................get current user functionality.......................................//

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
        getWishlistData(data._id);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  //................................. wishlist data for loged user.......................................//

  const getWishlistData = (id) => {
    fetch(`https://sephora-backend.onrender.com/wishlists/find/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setWishlistList(data);
        setIsData(true);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  //................................. wishlist product details for loged user.......................................//

  const handleWishlistDetails = (id) => {
    fetch(`https://sephora-backend.onrender.com/products/find/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
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

  //.................................Delete wishlist item of logeduser...................................//

  const handleClickDelete = (id) => {
    fetch(`https://sephora-backend.onrender.com/wishlists/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
        alert("Item Deleted from Wishlist");
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <>
      <div id="my_wishlist">
        <h1>My Wishlist</h1>
        <hr />
        <div id="wishlish_container">
          {isData ? (
            <>
              {wishlistList.map((e) => (
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
                    <h1> Product Id: {e.productId}</h1>
                    <p>Order Status: In Wishlist</p>

                    <p>Order created at: {e.createdAt}</p>
                    <Button
                      colorScheme="teal"
                      size="md"
                      onClick={() => handleWishlistDetails(e.productId)}
                    >
                      Check Details
                    </Button>
                  </div>
                </div>
              ))}
              {product && (
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
                          onClick={() => handleClickDelete(product._id)}
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
                          src={product.image_link}
                          alt={product.name}
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
                          {product.name}
                        </Text>
                        <Text fontWeight={500} textAlign={"left"} ml={4}>
                          ${product.price}
                          <AiFillHeart
                            onClick={() => handleClickDelete(product._id)}
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
                          onClick={() => handleClick(product)}
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
            <>
              <img
                className="wishlist_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_D5oEjScHGofIp1r475g2cJ9sS0LtMkyfewdpQ0qcZdWtZKc"
                alt="error"
              />
              <h3>Your Wishlist is empty</h3>
              <p>Add some items to your wishlist to save them for later.</p>
            </>
          )}
        </div>

        <button className="my_wishlist_btn">CONTINUE SHOPPING</button>
      </div>

      <hr className="hr_line" />
      <div id="my_wishlist_imges">
        <div className="my_wishlist_img">
          <img
            src="https://s1.thcdn.com/widgets/121-us/53/Skincare-041053.jpg"
            alt="error"
          />
          <h3>Skin Care</h3>
        </div>
        <div className="my_wishlist_img">
          <img
            src="https://s1.thcdn.com/widgets/121-us/30/580x580-125830.jpg"
            alt="error"
          />
          <h3>Hair Care</h3>
        </div>
        <div className="my_wishlist_img">
          <img
            src="https://s1.thcdn.com/widgets/121-us/17/original-NF_PROD_SpringPromo22-Mini_Hero_01-102717.jpg"
            alt="error"
          />
          <h3>Tools</h3>
        </div>
        <div className="my_wishlist_img">
          <img
            src="https://s1.thcdn.com/widgets/121-us/16/Makeup-041316.jpg"
            alt="error"
          />
          <h3>Makeup</h3>
        </div>
        <div className="my_wishlist_img">
          <img
            src="https://s1.thcdn.com/widgets/121-us/32/Body-041332.jpg"
            alt="error"
          />
          <h3>Bath & Body</h3>
        </div>
        <div className="my_wishlist_img">
          <img
            src="https://s1.thcdn.com/widgets/121-us/49/Wellness-041349.png"
            alt="error"
          />
          <h3>Wellness</h3>
        </div>
      </div>
    </>
  );
};

export default MyWishlist;
