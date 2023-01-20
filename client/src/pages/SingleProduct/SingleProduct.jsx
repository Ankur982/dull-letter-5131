import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  color,
  Flex,
  Image,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import AccordionComponent from "./AccordionComponent";
import {
  addProductCart,
  getSingleProduct,
} from "../../store/SingleProduct/singleProduct.action";
import { useEffect } from "react";
import ReviewSection from "./ReviewSection";
import Subcategory from "./Subcategory";
import { useUserAuth } from "../../context/UserAuthcontext";

function SingleProduct() {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const { id } = useParams();

  const [userId, setuserId] = useState(null);

  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.singleProduct);
  const toast = useToast();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  //.................................Add to wishlist functionality...............................................//

  const addToWishlist = () => {
    if (!isAddedToWishlist) {
      getUserId();
    } else {
      handleDeleteWishlist(id);
    }
  };

  const token = JSON.parse(localStorage.getItem("token")) || null;

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
        handleAddWishlist(data._id);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const handleAddWishlist = (userId) => {
    fetch("https://sephora-backend.onrender.com/wishlists/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({
        userId: userId,
        productId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAddedToWishlist(true);
        alert("Item Added in Wishlist");
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  //.................................Delete from wishlist functionality.......................................//

  const handleDeleteWishlist = (id) => {
    fetch(`https://sephora-backend.onrender.com/wishlists/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAddedToWishlist(false);
        alert("Item Deleted from Wishlist");
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const addToCart = () => {
    fetch("https://sephora-backend.onrender.com/carts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({
        userId: id,
        products: [
          {
            productId: id,
            quantity: 1,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Item Added in Cart");
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

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
    return <h3>Something Went Wrong !</h3>;
  }

  return (
    <Stack>
      <Flex
        mt={5}
        justify={"space-evenly"}
        direction={isLargerThan600 ? "row" : "column"}
      >
        <Box width={isLargerThan600 ? "45%" : "100%"}>
          <Image m={"auto"} w={"70%"} src={data.image_link} />
        </Box>
        <Box p={5} width={isLargerThan600 ? "45%" : "100%"}>
          <Box>
            <Text as="b" fontSize="14px">
              {data.brand}
            </Text>
            <Text fontSize="md">{data.name}</Text>
            <Box display={"flex"} mt={5}>
              <Box>
                <Text as="b">${data.price} </Text>
              </Box>
              <Text fontSize={"12px"} ml={1}>
                or 4 payments of $13.50 with Klarna or afterpay
              </Text>
            </Box>
          </Box>
          <Box mt={5}>
            <Text as="b" fontSize="md">
              Get it Shipped
            </Text>
            <RadioGroup defaultValue="1">
              <Stack spacing={5} direction="column">
                <Radio mt={10} colorScheme="green" value="1">
                  Standard
                </Radio>
                <Radio colorScheme="red" value="2">
                  Same-Day DeliverySame-Day Delivery not available for your
                  location Change your location
                </Radio>
              </Stack>
              <Box mt={5}>
                <Box>
                  <Text as="b" fontSize="md">
                    Buy Online & Pick Up
                  </Text>
                </Box>
                <Box mt={10}>
                  <Radio colorScheme="red" value="3">
                    Select to see availability at stores near you
                  </Radio>
                </Box>
              </Box>
            </RadioGroup>
          </Box>
          <Flex mt={10}>
            <Box>
              <Button
                onClick={addToCart}
                size={"lg"}
                pl={20}
                pr={20}
                borderRadius={50}
                fontSize="14px"
                colorScheme="red"
              >
                Add to Basket <br /> for Standard Shipping{" "}
              </Button>
            </Box>
            <Box ml={3} onClick={addToWishlist}>
              <Image
                width={50}
                src="https://cdn-icons-png.flaticon.com/512/7777/7777990.png"
                alt=""
                className="search"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box p={5} style={{ marginTop: "75px" }}>
        <Box ml={3}>
          <Text fontSize={"20px"} as="b">
            Description
          </Text>
        </Box>
        <Box ml={10} w="70%">
          <Text noOfLines={[1, 2, 3]}>{data.description}</Text>
        </Box>
      </Box>
      <Box p={5} style={{ marginTop: "30px" }}>
        <Box ml={3}>
          <Text fontSize={"20px"} as="b">
            About the Product
          </Text>
        </Box>
        <Box>
          <Subcategory
            heading={"What it is:"}
            summary=" A highlighter powder with a high-impact iridescent glow, giving skin
          an instant boost of radiance and comfort all day long."
          />
          <Subcategory heading={"Coverage:"} summary="Medium" />
          <Subcategory heading={"Finish:"} summary="Radiant" />
          <Subcategory heading={"Formulation:"} summary="Pressed Powder" />
          <Subcategory heading={"Formulation:"} summary="Pressed Powder" />
          <Subcategory
            heading={"Highlighted Ingredients:"}
            summary="- Wild Pansy Extract: Protects skin’s natural hydration."
          />
          <Subcategory
            heading={"What Else You Need to Know:"}
            summary="What Else You Need to Know: Composed of 95% natural-origin
            pigments, this highlighter is highly concentrated in shimmering
            pearlescent pigments, blending seamlessly for a radiant-looking
            complexion*. The formula is infused with wild pansy extract to
            hydrate the skin and provide lasting comfort, all housed in a
            Dior couture compact. (*Amount calculated based on the ISO
            16128-1 and ISO 16128-2 standard. Water percentage included.)"
          />
        </Box>
      </Box>
      <Box>
        <Box ml={3}>
          <AccordionComponent
            heading={"Ingredients"}
            subHeading={
              " -Wild Pansy Extract: Protects skin’s natural hydration."
            }
            summary=" Mica, Cetearyl Ethylhexanoate, Silica, Squalane,
        Octyldodecyl Stearoyl Stearate, Glycerin, Parfum
        (Fragrance), Polysorbate 80, 1,2-Hexanediol, Caprylyl
        Glycol, Prunus Armeniaca (Apricot) Kernel Oil,
        Ethylhexylglycerin, Synthetic Fluorphlogopite, Chondrus
        Crispus Extract, Xanthan Gum, Pentaerythrityl
        Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Cetearyl Alcohol,
        Dicalcium Phosphate, Aqua (Water), Tocopherol, Butylene
        Glycol, Hydrolyzed Viola Tricolor Extract, Rosa Multiflora
        Fruit Extract, [+/- Ci 77891 (Titanium Dioxide), Ci 77491,
        Ci 77499 (Iron Oxides), Ci 75470 (Carmine)]."
          />
        </Box>
        <Box ml={3}>
          <AccordionComponent
            heading={"How to Use"}
            subHeading={"Suggested Usage:"}
            summary=" Apply the Dior Forever Couture Luminizer Highlighter Powder with a highlighter brush on the high points of the face and collarbone.
        -Finish with a touch on the Cupid's bow above your lip for a glowy effect.
        
        Pro tip:
        -A little goes a long way, apply to desired effect."
          />
        </Box>
      </Box>
      <Box>
        <Box ml={3}>
          <Box>
            <Text p={5} fontSize={"20px"} as="b">
              Ratings & Reviews (2K)
            </Text>
          </Box>
          <Box m={5}>{/* <ReviewSection /> */}</Box>
        </Box>
      </Box>
      <Flex
        style={{ marginTop: "50px", marginLeft: "10px", marginBottom: "50px" }}
        ml={5}
        gap={15}
        justify={"flex-start"}
        direction={isLargerThan600 ? "row" : "column"}
      >
        <Box>
          <Image
            m={"auto"}
            src="https://tpc.googlesyndication.com/simgad/16160614607739331938"
          />
        </Box>
        <Box>
          <Image
            m={"auto"}
            src="https://tpc.googlesyndication.com/simgad/14177892550749632546"
          />
        </Box>
        <Box>
          <Image
            m={"auto"}
            src="https://tpc.googlesyndication.com/simgad/17810597195573312581"
          />
        </Box>
      </Flex>
    </Stack>
  );
}

export default SingleProduct;
