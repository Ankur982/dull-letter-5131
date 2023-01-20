import React from "react";
import { Heading, Link, Text } from "@chakra-ui/react";
import "./OfferBanner.css";
const OfferBanner = () => {
  return (
    <div className="banner_container">
      <div className="banner_item">
        <div
          style={{ backgroundColor: "#fecfc5" }}
          className="banner_item_txt_box"
        >
          <Heading as="h4" size="md" mt="-5px">
            Charlotte Tilbury's Greatest Hits
          </Heading>
          <Text fontSize="sm" ml="0px" mt="0px">
            <Link to="#">Must-have makeup from a beauty icon.</Link>
          </Text>
          <button>
            <Link to="#">SHOP NOW▸</Link>
          </button>
        </div>
        <div className="banner_item_img_box">
          <img
            alt="test product"
            src="https://www.sephora.com/contentimages/2022-11-9-charlotte-tilbury-holiday-collection-site-desktop-mweb-home-page-rwd-marketing-banner-bestsellers-800x256-en-us-can.jpg?imwidth=400"
          />
        </div>
      </div>
      <div className="banner_item">
        <div
          style={{ backgroundColor: "#01474f" }}
          className="banner_item_txt_box"
        >
          <Heading as="h4" size="md" mt="-5px">
            Charlotte Tilbury's Greatest Hits
          </Heading>
          <Text fontSize="sm" ml="0px" mt="5px">
            <Link to="#">Must-have makeup from a beauty icon.</Link>
          </Text>
          <button>
            <Link to="#">SHOP NOW▸</Link>
          </button>
        </div>
        <div className="banner_item_img_box">
          <img
            alt="test product"
            src="https://www.sephora.com/contentimages/2022-holiday-launch-site-mobile-desktop-home-page-rwd-marketing-banner-holiday-hub-800x256-us-can-kohls.jpg?imwidth=400"
          />
        </div>
      </div>
      <div className="banner_item">
        <div
          style={{ backgroundColor: "#01474f" }}
          className="banner_item_txt_box"
        >
          <Heading as="h4" size="md" mt="-5px">
            Charlotte Tilbury's Greatest Hits
          </Heading>
          <Text fontSize="sm" ml="0px" mt="5px">
            <Link to="#">Must-have makeup from a beauty icon.</Link>
          </Text>
          <button>
            <Link to="#">SHOP NOW▸</Link>
          </button>
        </div>
        <div className="banner_item_img_box">
          <img
            alt="test product"
            src="https://www.sephora.com/contentimages/2022-11-seasonal-services-wave3-holiday-site-desktop-mobile-home-page-rwd-marketing-banner-us-800x256.jpg?imwidth=400"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
