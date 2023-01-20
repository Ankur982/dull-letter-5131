import { Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import "./BottomBanner.css";

const BottomBanner = () => {
  return (
    <div className="bottom_container">
      <hr style={{ margin: "50px 0" }} />
      <div className="bottomBanner_container">
        <div className="bottomBanner_item">
          <div
            style={{ backgroundColor: "#ffffff" }}
            className="bottomBanner_item_txt_box"
          >
            <Heading as="h4" size="md" mt="-5px">
              Our Commitment to Diversity, Equity & Inclusion
            </Heading>
            <button>
              <Link to="#">SHOP NOW▸</Link>
            </button>
          </div>
          <div className="bottomBanner_item_img_box">
            <img
              alt="test product"
              src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-diversity-inclusion-desktop-mobile-us-ca-slice.jpeg?imwidth=400"
            />
          </div>
        </div>
        <div className="bottomBanner_item">
          <div
            style={{ backgroundColor: "#16603b" }}
            className="bottomBanner_item_txt_box"
          >
            <Heading as="h4" size="md" mt="-5px">
              Get Your Gifts in Time
            </Heading>
            <Text fontSize="sm" ml="0px" mt="5px">
              <Link to="#">
                Fast and easy options for stress-free holiday shopping.{" "}
              </Link>
            </Text>
            <button>
              <Link to="#">LEARN MORE▸</Link>
            </button>
          </div>
          <div className="bottomBanner_item_img_box">
            <img
              alt="test product"
              src="https://www.sephora.com/contentimages/2022-holiday-launch-site-desktop-mobile-home-page-rwd-marketing-banner-bottom-banner-ease-and-convenience-800x256-us-can.jpg?imwidth=400"
            />
          </div>
        </div>
        <div className="bottomBanner_item">
          <div
            style={{ backgroundColor: "#c6a886" }}
            className="bottomBanner_item_txt_box"
          >
            <Heading as="h4" size="md" mt="-5px">
              Clean + Planet Positive
            </Heading>
            <Text fontSize="sm" ml="0px" mt="5px">
              <Link to="#">
                Brands on a mission to change your skin and the earth.
              </Link>
            </Text>
            <button>
              <Link to="#">LEARN MORE▸</Link>
            </button>
          </div>
          <div className="bottomBanner_item_img_box">
            <img
              alt="test product"
              src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-clean-planet-positive-desktop-mobile-us-ca-slice.jpeg?imwidth=400"
            />
          </div>
        </div>
      </div>
      <hr style={{ margin: "50px 0" }} />
    </div>
  );
};

export default BottomBanner;
