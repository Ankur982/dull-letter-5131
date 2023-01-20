import { Heading, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./SellingFast.css";
import {
  ChevronRightIcon,
  AddIcon,
  WarningIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

const SellingFast = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 8;
  const items = [
    {
      title: "SEPHORA COLLECTION",
      image:
        "https://www.sephora.com/productimages/sku/s2495539-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
      desc: "Vitamin Eye Masks",
      color: "#8ec9e9",
    },
    {
      title: "beautyblender",
      image:
        "https://www.sephora.com/productimages/sku/s2097400-main-zoom.jpg?imwidth=122",
      desc: "Power Pocket Puff™",
      color: "#dcb796",
    },
    {
      title: "Charlotte Tilbury",
      image:
        "https://www.sephora.com/productimages/sku/s2447738-main-zoom.jpg?imwidth=122",
      desc: "Mini Pillow Talk Lipstick & Liner Set",
      color: "#01474f",
    },
    {
      title: "Lancôme",
      image:
        "https://www.sephora.com/productimages/sku/s2417145-main-zoom.jpg?imwidth=122",
      desc: "Lash Idôle Lash-Lifting & Volumizing Mascara",
      color: "#59a19e",
    },
    {
      title: "SEPHORA COLLECTION",
      image:
        "https://www.sephora.com/productimages/sku/s2317451-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
      desc: "Clean Glossy Lip Oil",
      color: "#8ec9e9",
    },
    {
      title: "lilah b.",
      image:
        "https://www.sephora.com/productimages/sku/s2204063-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
      desc: "Lovingly Lip™ Tinted Lip Oil Gloss",
      color: "#dcb796",
    },
    {
      title: "Youth To The People",
      image:
        "https://www.sephora.com/productimages/sku/s1863588-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=122",
      desc: "Superfood Antioxidant Cleanser",
      color: "#01474f",
    },
    {
      title: "Supergoop!",
      image:
        "https://www.sephora.com/productimages/sku/s2535656-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
      desc: "Glowscreen Sunscreen SPF 40 PA+++ with Hyaluroni",
      color: "#59a19e",
    },

    {
      title: "Peter Thomas Roth",
      image:
        "https://www.sephora.com/productimages/sku/s2625374-main-zoom.jpg?imwidth=122",
      desc: "Full-Size Eye-Conic Hydra-Gel Patches",
      color: "#8ec9e9",
    },
    {
      title: "Rare Beauty by Selena Gomez",
      image:
        "https://www.sephora.com/productimages/sku/s2362168-main-zoom.jpg?imwidth=122",
      desc: "Positive Light Liquid Luminizer Highlight",
      color: "#dcb796",
    },
    {
      title: "Sol de Janeiro",
      image:
        "https://www.sephora.com/productimages/sku/s1802412-main-zoom.jpg?imwidth=122",
      desc: "Brazilian Bum Bum Body Cream",
      color: "#01474f",
    },
    {
      title: "SEPHORA COLLECTION",
      image:
        "https://www.sephora.com/productimages/sku/s2373066-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=122",
      desc: "12 Hour Contour Pencil Eyeliner",
      color: "#59a19e",
    },
    {
      title: "innisfree",
      image:
        "https://www.sephora.com/productimages/sku/s2443240-main-zoom.jpg?imwidth=122",
      desc: "Pore Clearing Clay Mask",
      color: "#8ec9e9",
    },
    {
      title: "tarte",
      image:
        "https://www.sephora.com/productimages/sku/s2570489-main-zoom.jpg?imwidth=166",
      desc: "Maracuja Juicy Lip Plump",
      color: "#dcb796",
    },
    {
      title: "tarte",
      image:
        "https://www.sephora.com/productimages/sku/s2370484-main-zoom.jpg?imwidth=122",
      desc: "Maracuja Juicy Lip Balm",
      color: "#01474f",
    },
    {
      title: "SEPHORA COLLECTION",
      image:
        "https://www.sephora.com/productimages/sku/s2377398-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=122",
      desc: "Translucent Loose Setting Powder",
      color: "#59a19e",
    },
    {
      title: "tarte",
      image:
        "https://www.sephora.com/productimages/sku/s2570489-main-zoom.jpg?imwidth=122",
      desc: "Maracuja Juicy Lip Plump",
      color: "#8ec9e9",
    },
    {
      title: "LAWLESS",
      image:
        "https://www.sephora.com/productimages/sku/s2620995-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
      desc: "Mini Winter Beach Lip Plumper Set",
      color: "#dcb796",
    },
    {
      title: "SEPHORA COLLECTION",
      image:
        "https://www.sephora.com/productimages/sku/s2282788-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
      desc: "Clean Lip Balm & Scrub",
      color: "#01474f",
    },
  ];
  return (
    <div
      style={{ padding: `${chevronWidth}px 2px` }}
      className="selling_container"
    >
      <Heading as="h4" size="md" mb="30px">
        Selling Fast
      </Heading>

      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={6}
        gutter={8}
        leftChevron={
          <div className="selling_carousel_btn_box_L">
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
            <div className="selling_item" key={item.image}>
              <div className="selling_item_img_box">
                <img alt="test product" src={item.image} />
                <button className="selling_item_img_btn">
                  <Heading as="h6" size="xs" p="5px">
                    Quicklook
                  </Heading>
                </button>
              </div>
              <div
                style={{ backgroundColor: `${item.color}` }}
                className="selling_item_txt_box"
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
export default SellingFast;
