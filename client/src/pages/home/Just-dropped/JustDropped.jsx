import { Heading, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./Just Dropped.css";
import {
  ChevronRightIcon,
  AddIcon,
  WarningIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

const JustDropped = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 8;
  const items = [
    {
      title: "Hourglass",
      image:
        "https://www.sephora.com/productimages/sku/s2586741-main-zoom.jpg?imwidth=122",
      desc: "Ambient Soft Glow Foundation",
      color: "#8ec9e9",
    },
    {
      title: "amika",
      image:
        "https://www.sephora.com/productimages/sku/s2592194-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
      desc: "Perk Up Plus Extended Clean Dry Shampoo",
      color: "#dcb796",
    },
    {
      title: "Anastasia Beverly Hills",
      image:
        "https://www.sephora.com/productimages/sku/s2614584-main-zoom.jpg?imwidth=122",
      desc: "Rose Metals Eyeshadow Palette",
      color: "#01474f",
    },

    {
      title: "Natasha Denona",
      image:
        "https://www.sephora.com/productimages/sku/s2618981-main-zoom.jpg?imwidth=122",
      desc: "Retro Glam Eyeshadow Palette",
      color: "#59a19e",
    },
    {
      title: "HUDA BEAUTY",
      image:
        "https://www.sephora.com/productimages/sku/s2602654-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
      desc: "Glowish Blur Jam Silicone Free Smoothing Primer",
      color: "#8ec9e9",
    },
    {
      title: "Bobbi Brown",
      image:
        "https://www.sephora.com/productimages/sku/s2618999-main-zoom.jpg?imwidth=122",
      desc: "Vitamin Enriched Face Base Priming Moisturizer Duo S..",
      color: "#dcb796",
    },
    {
      title: "PAT McGRATH LABS",
      image:
        "https://www.sephora.com/productimages/sku/s2619096-main-zoom.jpg?imwidth=122",
      desc: "MTHRSHP MEGA: Celestial Nirvana",
      color: "#01474f",
    },
    {
      title: "Briogeo",
      image:
        "https://www.sephora.com/productimages/sku/s2592079-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=122",
      desc: "Scalp Revival™ Shampoo & Don't Despair, Repair!™ Hair Mask Gift Set",
      color: "#8ec9e9",
    },
    {
      title: "MAKEUP BY MARIO",
      image:
        "https://www.sephora.com/productimages/sku/s2594364-main-zoom.jpg?imwidth=122",
      desc: "Mario's Lip Lift™ Kit",
      color: "#dcb796",
    },
    {
      title: "Givenchy",
      image:
        "https://www.sephora.com/productimages/sku/s2624468-main-zoom.jpg?imwidth=122",
      desc: "Le Rouge Interdit Intense Silk Satin Matte Lipstick- Limited Edition",
      color: "#01474f",
    },
    {
      title: "Anastasia Beverly Hills",
      image:
        "https://www.sephora.com/productimages/sku/s2614584-main-zoom.jpg?imwidth=122",
      desc: "Rose Metals Eyeshadow Palette",
      color: "#59a19e",
    },
    {
      title: "Sol de Janeiro",
      image:
        "https://www.sephora.com/productimages/sku/s2619260-main-zoom.jpg?imwidth=122",
      desc: "Radiant Rhythm Bom Dia Set",
      color: "#8ec9e9",
    },
    {
      title: "Tatcha",
      image:
        "https://www.sephora.com/productimages/sku/s2618486-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
      desc: "Clarifying Cleanse + Hydrate Duo",
      color: "#dcb796",
    },
    {
      title: "SEPHORA COLLECTION",
      image:
        "https://www.sephora.com/productimages/sku/s2579878-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
      desc: "Wishing You Mask Wishes",
      color: "#01474f",
    },
    {
      title: "Moroccanoil",
      image:
        "https://www.sephora.com/productimages/sku/s2612844-main-zoom.jpg?imwidth=122",
      desc: "Hydrating Shampoo, Conditioner & Moroccanoil",
      color: "#59a19e",
    },
    {
      title: "Glow Recipe",
      image:
        "https://www.sephora.com/productimages/sku/s2619310-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=122",
      desc: "Hey You, You're Glowing Watermelon Set",
      color: "#59a19e",
    },
  ];
  return (
    <div
      style={{ padding: `${chevronWidth}px 2px` }}
      className="dropped_container"
    >
      <Heading as="h4" size="md" mb="30px">
        Just Dropped
      </Heading>

      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={6}
        gutter={8}
        leftChevron={
          <div className="dropped_carousel_btn_box_L">
            {" "}
            <ChevronLeftIcon boxSize={10} color="white" />{" "}
          </div>
        }
        rightChevron={
          <div className="dropped_carousel_btn_box_R">
            {" "}
            <ChevronRightIcon boxSize={10} color="white" />{" "}
          </div>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {items.map((item, index) => {
          return (
            <div className="dropped_item" key={item.image}>
              <div className="dropped_item_img_box">
                <img alt="test product" src={item.image} />
                <button className="dropped_item_img_btn">
                  <Heading as="h6" size="xs" p="5px">
                    Quicklook
                  </Heading>
                </button>
              </div>
              <div
                style={{ backgroundColor: `${item.color}` }}
                className="dropped_item_txt_box"
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
export default JustDropped;
