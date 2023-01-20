import { Heading, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./BeautyOffers.css";
import {
  ChevronRightIcon,
  AddIcon,
  WarningIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

const BeautyOffers = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 8;
  const items = [
    {
      title: "Spend More, Get More Fragrance",
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2022/November/2022-fragrance-q4-site-beauty-offers-banner-1000x750-smgm-us-khols.jpg?imwidth=240",
      desc: "Get 1 mini with $45 product purchase, 2 minis with $75 product purchase, or 3 minis with $105 product purchase.*",
      sub_desc1:
        "Get 1 mini with $45 product purchase, 2 minis with $75 product purchase, or 3 minis with $105 product purchase.*",
      sub_desc2: "Online only",
      sub_desc3: "*Exclusions/terms apply. While supplies last.",
      color: "#8ec9e9",
    },
    {
      title: "Get 10% off Your Next Purchase**",
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2022/November/percent-off-basket-app-content-card-promo.png?imwidth=240",
      sub_desc1:
        "When you sign up for text updates. Plus, never miss out on exclusive releases, events, and offers.",
      sub_desc2: "Beauty Insider members only.",
      sub_desc3: "In store & online • Ends 1/23/2023**Exclusions/terms apply.",
      color: "#dcb796",
    },
    {
      title: "Get a FREE Skinfix Trial Size",
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2022/November/2022-11-9-skinfix-core-focus-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg?imwidth=240",
      sub_desc1:
        "Target dark circles, puffiness, and fine lines with the Triple Lipid Eye Cream. ",
      sub_desc2: "Free with $25 purchase.*Beauty Insider members only.",
      sub_desc3: "*Exclusions/terms apply. While supplies last.",
      color: "#01474f",
    },
    {
      title: "Choose 2 Complimentary Hair-Care Trial Sizes",
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2022/October/2022-10-24-slotting-promo-app-beauty-offers-banner-STRONGERHAIR-us-handoff.jpg?imwidth=240",
      sub_desc1:
        "Pick 2 trial sizes for stronger hair from Olaplex, Virtue, Briogeo, or Christohpe Robin.",
      sub_desc2:
        "Complimentary with $35 purchase.*Beauty Insider members only.",
      sub_desc3: " Online only",
      color: "#59a19e",
    },
    {
      title: "Free Danessa Myricks Beauty Trial Size",
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2022/October/2022-10-27-black-owned-brands-site-desktop-mobile-app-beauty-offers-page-banner-en-us.jpg?imwidth=240",
      sub_desc1:
        "Cut back on shine with the bestselling Yummy Skin Blurring Balm Powder.",
      sub_desc2: "Free with $25 purchase.*Beauty Insider members only.",
      sub_desc3: "*Exclusions/terms apply.",
      color: "#8ec9e9",
    },
    {
      title: "Spend More, Get More",
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2022/October/2022-october-smgm-site-desktop-mobile-app-beauty-offers-page-banner-1000x750-us.jpg?imwidth=240",
      sub_desc1:
        "Pick up to six free trial sizes from Pureology, COLOR WOW, shu uemura, and more!",
      sub_desc2: "Free with $100 purchase.* Beauty Insider members only",
      sub_desc3: "*Exclusions/terms apply.",
      color: "#dcb796",
    },
    {
      title: "Choose a Complimentary Skincare Trial Size",
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2022/September/2022-09-29-slotting-promo-app-beauty-offers-banner-SKINLUXE-us-handoff.jpg?imwidth=240",
      sub_desc1:
        "Pick a luxe trial size from Lancôme, Guerlain, SK-II, Augustinus Bader, or La Mer.",
      sub_desc2:
        "Complimentary with $55 purchase.*Beauty Insider members only.",
      sub_desc3: "*Exclusions/terms apply.",
      color: "#01474f",
    },
  ];
  return (
    <div
      style={{ padding: `${chevronWidth}px 2px` }}
      className="beauty_container"
    >
      <Heading as="h4" size="md" mb="30px">
        Beauty Offers (7)
      </Heading>

      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={8}
        leftChevron={
          <div className="beauty_carousel_btn_box_L">
            {" "}
            <ChevronLeftIcon boxSize={10} color="white" />{" "}
          </div>
        }
        rightChevron={
          <div className="beauty_carousel_btn_box_R">
            {" "}
            <ChevronRightIcon boxSize={10} color="white" />{" "}
          </div>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {items.map((item, index) => {
          return (
            <div className="beauty_item" key={item.image}>
              <div className="beauty_item_img_box">
                <img alt="test product" src={item.image} />
              </div>
              <div className="beauty_item_txt_box">
                <Heading as="h6" size="xs" mt="-5px">
                  {item.title}
                </Heading>
                <Text fontSize="sm" ml="0px" mt="5px">
                  {item.sub_desc1}
                </Text>
                <Text fontSize="xs" ml="0px" mt="10px" color="#868487">
                  {item.sub_desc2}
                </Text>
                <Text fontSize="xs" ml="0px" mt="5px" color="#868487">
                  {item.sub_desc3}
                </Text>
                <button
                  style={{ backgroundColor: `${item.color}` }}
                  className="beauty_item_txt_btn"
                >
                  {" "}
                  <Heading as="h6" size="xs">
                    Apply
                  </Heading>
                </button>
              </div>
            </div>
          );
        })}
      </ItemsCarousel>
      <hr style={{ margin: "50px 0" }} />
    </div>
  );
};
export default BeautyOffers;
