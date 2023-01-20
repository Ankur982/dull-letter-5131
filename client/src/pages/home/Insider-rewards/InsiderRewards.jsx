import { Heading, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./InsiderRewards.css";
import {
  ChevronRightIcon,
  AddIcon,
  WarningIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

const InsiderRewards = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 8;
  const items = [
    {
      title: "Dior",
      image:
        "https://www.sephora.com/productimages/sku/s2392140-main-zoom.jpg?imwidth=122",
      desc: "Capture Totale Super Potent Age-Defying",
      color: "#8ec9e9",
    },
    {
      title: "LANEIGE",
      image:
        "https://www.sephora.com/productimages/sku/s2544583-main-zoom.jpg?imwidth=122",
      desc: "Hypoallergenic Cica Sleeping Mask",
      color: "#dcb796",
    },
    {
      title: "Smashbox",
      image:
        "https://www.sephora.com/productimages/sku/s2356442-main-zoom.jpg?imwidth=122",
      desc: "Photo Finish Oil & Shine Control Primer",
      color: "#01474f",
    },
    {
      title: "Laura Mercier",
      image:
        "https://www.sephora.com/productimages/sku/s2413219-main-zoom.jpg?imwidth=122",
      desc: "Pure Canvas Primer - Blurring",
      color: "#59a19e",
    },
    {
      title: "fresh",
      image:
        "https://www.sephora.com/productimages/sku/s2566891-main-zoom.jpg?imwidth=122",
      desc: "Soy pH-Balanced Hydrating Face Wash",
      color: "#8ec9e9",
    },
    {
      title: "Caudalie",
      image:
        "https://www.sephora.com/productimages/sku/s2472967-main-zoom.jpg?imwidth=122",
      desc: "Vinosource Moisturizing Sorbet",
      color: "#dcb796",
    },
    {
      title: "Living Proof",
      image:
        "https://www.sephora.com/productimages/sku/s2372811-main-zoom.jpg?imwidth=122",
      desc: "No Frizz Intense Moisture Hair Mask",
      color: "#01474f",
    },
    {
      title: "bareMinerals",
      image:
        "https://www.sephora.com/productimages/sku/s2590685-main-zoom.jpg?imwidth=122",
      desc: "Mineral Veil Talc Free Setting Powder.",
      color: "#59a19e",
    },
    {
      title: "TULA Skincare",
      image:
        "https://www.sephora.com/productimages/sku/s2591501-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
      desc: "Brightening Treatment Drops Triple Vitamin C",
      color: "#8ec9e9",
    },
    {
      title: "LANEIGE",
      image:
        "https://www.sephora.com/productimages/sku/s2489862-main-zoom.jpg?imwidth=122",
      desc: "Water Bank Moisture Cream",
      color: "#dcb796",
    },
    {
      title: "CLINIQUE",
      image:
        "https://www.sephora.com/productimages/sku/s2549574-main-zoom.jpg?imwidth=122",
      desc: " Quickliner™ For Eyes Intense Eyeliner",
      color: "#01474f",
    },
    {
      title: "Origins",
      image:
        "https://www.sephora.com/productimages/sku/s2548295-main-zoom.jpg?imwidth=122",
      desc: "Checks and Balances™ Frothy",
      color: "#59a19e",
    },
    {
      title: "First Aid Beauty",
      image:
        "https://www.sephora.com/productimages/sku/s2366854-main-zoom.jpg?imwidth=122",
      desc: "Facial Radiance Pads",
      color: "#8ec9e9",
    },
    {
      title: "Lancôme",
      image:
        "https://www.sephora.com/productimages/sku/s2461994-main-zoom.jpg?imwidth=122",
      desc: "Advanced Génifique Yeux Light-Pearl Eye",
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
      className="insider_container"
    >
      <Heading as="h4" size="md">
        Beauty Insider Rewards
      </Heading>
      <Text fontSize="md" ml="0px" mt="5px" fontWeight="500" mb="30px">
        You have 0 points. Keep earning to redeem rewards!
      </Text>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={6}
        gutter={8}
        leftChevron={
          <div className="insider_carousel_btn_box_L">
            {" "}
            <ChevronLeftIcon boxSize={10} color="white" />{" "}
          </div>
        }
        rightChevron={
          <div className="selling_carousel_btn_box_R">
            {" "}
            <ChevronRightIcon boxSize={10} color="white" />{" "}
          </div>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {items.map((item, index) => {
          return (
            <div className="insider_item" key={item.image}>
              <div className="insider_item_img_box">
                <img alt="test product" src={item.image} />
                <button className="insider_item_img_btn">
                  <Heading as="h6" size="xs" p="5px">
                    Quicklook
                  </Heading>
                </button>
              </div>
              <div
                style={{ backgroundColor: `${item.color}` }}
                className="insider_item_txt_box"
              >
                <Heading as="h6" size="xs" mt="-5px">
                  {item.title}
                </Heading>
                <Text fontSize="sm" ml="0px" mt="5px">
                  {item.desc}
                </Text>
                <Text fontSize="sm" ml="0px" mt="5px">
                  100 Points
                </Text>
                <button
                  style={{ backgroundColor: `${item.color}` }}
                  className="insider_item_txt_btn"
                >
                  {" "}
                  <Heading as="h6" size="xs">
                    Add
                  </Heading>
                </button>
              </div>
            </div>
          );
        })}
      </ItemsCarousel>
      <hr style={{ margin: "10px 0 50px 0" }} />
    </div>
  );
};
export default InsiderRewards;
