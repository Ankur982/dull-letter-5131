import { Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import ItemsCarousel from "react-items-carousel";
import "./CarouselSection1.css";
import { ChevronRightIcon, AddIcon, WarningIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import {Link} from "react-router-dom"

const CarouselSection1 = () => {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 8;
  const items = [
    {
        "title": "Fragrance Gifts $75 & Under",
        "image":"https://www.sephora.com/contentimages/2022-fragrance-q4-site-home-page-rwd-hero-banner-holiday-value-sets-75-under-us-01..jpg?imwidth=545",
        "desc":"Sets for everyone on your list (including you!)",
        "color":"#8ec9e9"
        
    },
    {
        "title": "Best of Dior",
        "image":"https://www.sephora.com/contentimages/2022-11-29-stock-up-on-dior-site-desktop-mweb-home-page-rwd-hero-banner-1000x750-en-us-can.jpg?imwidth=545",
        "desc":"Luxe beauty for everyone on your list.",
        "color":"#dcb796"
    },
    {
        "title": "Value Sets? Obsessed!",
        "image":"https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-home-page-hero-banner-rwd-v1-product-us-release-1000x750.jpg?imwidth=545",
        "desc":"Limited edition and packed full of products⁠—fun to give, even better to get.",
        "color":"#01474f"
        
    },
    {
        "title": "In With the New",
        "image":"https://www.sephora.com/contentimages/2022-10-29-slotting-just-arrived-v2-standard-site-responsive-home-page-hero-banner-4-product-US-CA-handoff_01.jpg?imwidth=545",
        "desc":"The latest beauty from the hottest brands.",
        "color":"#59a19e"
        
    }
    
  ];
  return (
    <div style={{ padding: `${chevronWidth}px 2px` }} className="card_container">
    <ItemsCarousel
      requestToChangeActive={setActiveItemIndex}
      activeItemIndex={activeItemIndex}
      numberOfCards={2.7}
      gutter={8}
      leftChevron={ <div className="carousel_btn_box_L"> <ChevronLeftIcon boxSize={10} color='white'/> </div>}
      rightChevron={<div className="carousel_btn_box_R"> <ChevronRightIcon boxSize={10} color='white'/> </div>}
      outsideChevron
      chevronWidth={chevronWidth}
    >
      {items.map((item, index) => {
        return (
          <Link to="/products"><div className="card_item" key={item.image}>
          <div className="card_item_img_box">
            <img alt="test product" src={item.image} />
          </div>  
          <div style={{ backgroundColor:`${item.color}` }} className="card_item_txt_box">
          <Heading as='h4' size='md' mt="-5px" >
          {item.title}
          </Heading>
            <Text fontSize='sm' ml="0px" mt="5px"><Link to="#">{item.desc}</Link></Text>
            <button> <Link to="#">SHOP NOW▸</Link></button>
          </div>
          </div>
          </Link>
        );
      })}
    </ItemsCarousel>
  </div>
  )
}

export default CarouselSection1