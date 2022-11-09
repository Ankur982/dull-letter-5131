import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import AccordionComponent from "../../components/Accordion";
import Subcategory from "../../components/Subcategory";

function SingleProduct() {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  return (
    <Stack>
      <Flex
        mt={5}
        justify={"space-evenly"}
        direction={isLargerThan600 ? "row" : "column"}
      >
        <Box width={isLargerThan600 ? "45%" : "100%"}>
          <Image
            m={"auto"}
            w={"70%"}
            src="https://www.sephora.com/productimages/sku/s2316172-main-zoom.jpg?imwidth=465"
          />
        </Box>
        <Box p={5} width={isLargerThan600 ? "45%" : "100%"}>
          <Box>
            <Text as="b" fontSize="14px">
              Dior
            </Text>
            <Text fontSize="md">BACKSTAGE Face & Body Foundation</Text>
            <Box display={"flex"} mt={5}>
              <Box>
                <Text as="b">$40.00 </Text>
              </Box>
              <Text fontSize={"12px"} ml={1}>
                or 4 payments of $13.50 with Klarna or afterpay
              </Text>
            </Box>
          </Box>
          <Box mt={5}>
            <Box>
              <Text as="b" fontSize="md">
                Get it Shipped
              </Text>
            </Box>
            <Box mt={10}>
              <RadioGroup defaultValue="1">
                <Stack spacing={5} direction="column">
                  <Radio mt={2} colorScheme="green" value="1">
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
                  <Box mt={2}>
                    <Box mt={10}>
                      <Radio colorScheme="red" value="3">
                        Select to see availability at stores near you
                      </Radio>
                    </Box>
                  </Box>
                </Box>
              </RadioGroup>
            </Box>
          </Box>
          <Box mt={10}>
            <Button
              size={"lg"}
              pl={20}
              pr={20}
              borderRadius={20}
              fontSize="14px"
              colorScheme="red"
            >
              Add to Basket <br /> for Standard Shipping{" "}
            </Button>
          </Box>
        </Box>
      </Flex>
      <Box p={5} style={{ marginTop: "75px" }}>
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
          <Text p={5} fontSize={"20px"} as="b">
            Compare Similar Products
          </Text>
        </Box>
      </Box>
    </Stack>
  );
}

export default SingleProduct;
