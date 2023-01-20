import { Heading, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./ChoosenForYou.css";
import {
  ChevronRightIcon,
  AddIcon,
  WarningIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

const ChoosenForYou = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 8;
  const items = [
    {
      title: "Charlotte Tilbury",
      image:
        "https://www.sephora.com/productimages/sku/s2419786-main-zoom.jpg?imwidth=166",
      desc: "Charlotte Tilbury",
      color: "#8ec9e9",
    },
    {
      title: "MAKEUP BY MARIO",
      image:
        "https://www.sephora.com/productimages/sku/s2594364-main-zoom.jpg?imwidth=166",
      desc: "Mario's Lip Lift™ Kit",
      color: "#dcb796",
    },
    {
      title: "Charlotte Tilbury",
      image:
        "https://www.sephora.com/productimages/sku/s2619146-main-zoom.jpg?imwidth=166",
      desc: "Pillow Talk Beautifying Lip Set",
      color: "#01474f",
    },
    {
      title: "HAUS LABS BY LADY GAGA",
      image:
        "https://www.sephora.com/productimages/sku/s2597268-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166",
      desc: "Triclone Skin Tech Medium Coverage Foundation with..",
      color: "#59a19e",
    },

    {
      title: "Fenty Beauty by Rihanna",
      image:
        "https://www.sephora.com/productimages/sku/s2590032-main-zoom.jpg?imwidth=166",
      desc: "Pro Filt’r Soft Matte Longwear Liquid Foundation.",
      color: "#8ec9e9",
    },
    {
      title: "Charlotte Tilbury",
      image:
        "https://www.sephora.com/productimages/sku/s2606085-main-zoom.jpg?imwidth=166",
      desc: "Airbrush Flawless Finish Setting Powder.",
      color: "#dcb796",
    },
    {
      title: "Sol de Janeiro",
      image:
        "https://www.sephora.com/productimages/sku/s1930759-main-zoom.jpg?imwidth=166",
      desc: "Brazilian Crush Cheirosa ’62 Bum Bum Hair & Body.",
      color: "#01474f",
    },
    {
      title: "LANEIGE",
      image:
        "https://www.sephora.com/productimages/sku/s1966258-main-zoom.jpg?pb=2020-03-allure-readers-choice-2019&imwidth=166",
      desc: "Lip Sleeping Mask Intense Hydration with Vitamin C.",
      color: "#59a19e",
    },

    {
      title: "NARS",
      image:
        "https://www.sephora.com/productimages/sku/s2172310-main-zoom.jpg?imwidth=166",
      desc: "Radiant Creamy Concealer.",
      color: "#8ec9e9",
    },
    {
      title: "Sol de Janeiro",
      image:
        "https://www.sephora.com/productimages/sku/s1802412-main-zoom.jpg?imwidth=166",
      desc: "Brazilian Bum Bum Body Cream",
      color: "#dcb796",
    },
    {
      title: "Charlotte Tilbury",
      image:
        "https://www.sephora.com/productimages/sku/s2244804-main-zoom.jpg?imwidth=166",
      desc: "Airbrush Flawless Longwear Foundation",
      color: "#01474f",
    },
    {
      title: "Dior",
      image:
        "https://www.sephora.com/productimages/sku/s2579340-main-zoom.jpg?imwidth=166",
      desc: "Dior Addict Lip Glow",
      color: "#59a19e",
    },

    {
      title: "Glow Recipe",
      image:
        "https://www.sephora.com/productimages/sku/s2404846-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=166",
      desc: "Watermelon Glow Niacinamide Dew Drops",
      color: "#8ec9e9",
    },
    {
      title: "NARS",
      image:
        "https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=166",
      desc: "Light Reflecting Advanced Skincare Foundation",
      color: "#dcb796",
    },
    {
      title: "Sol de Janeiro",
      image:
        "https://www.sephora.com/productimages/sku/s2205417-main-zoom.jpg?imwidth=166",
      desc: "Bum Bum Jet Set",
      color: "#01474f",
    },
    {
      title: "Sol de Janeiro",
      image:
        "https://www.sephora.com/productimages/sku/s1985118-main-zoom.jpg?imwidth=166",
      desc: "Mini Brazilian Crush Body Fragrance Mist",
      color: "#59a19e",
    },
  ];
  return (
    <div
      style={{ padding: `${chevronWidth}px 2px` }}
      className="choose_container"
    >
      <Heading as="h4" size="md" mb="30px">
        Choosen For You
      </Heading>

      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={6}
        gutter={8}
        leftChevron={
          <div className="choose_carousel_btn_box_L">
            {" "}
            <ChevronLeftIcon boxSize={10} color="white" />{" "}
          </div>
        }
        rightChevron={
          <div className="choose_carousel_btn_box_R">
            {" "}
            <ChevronRightIcon boxSize={10} color="white" />{" "}
          </div>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {items.map((item, index) => {
          return (
            <div className="choose_item" key={item.image}>
              <div className="choose_item_img_box">
                <img alt="test product" src={item.image} />
                <button className="choose_item_img_btn">
                  <Heading as="h6" size="xs" p="5px">
                    Quicklook
                  </Heading>
                </button>
              </div>
              <div
                style={{ backgroundColor: `${item.color}` }}
                className="choose_item_txt_box"
              >
                <Heading as="h6" size="xs" mt="-5px">
                  {item.title}
                </Heading>
                <Text fontSize="sm" ml="0px" mt="5px">
                  {item.desc}
                </Text>
              </div>
            </div>
          );
        })}
      </ItemsCarousel>
    </div>
  );
};
export default ChoosenForYou;
