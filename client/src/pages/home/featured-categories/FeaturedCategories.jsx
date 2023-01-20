import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import "./FeaturedCategories.css";

const FeaturedCategories = () => {
  return (
    <>
      <div className="featured_container">
        <div className="featured_box1">
          <Heading as="h4" size="md">
            {" "}
            Featured Categories{" "}
          </Heading>
          <Text fontSize="md" ml="0px" mt="5px" fontWeight="500">
            Shop what's popular now.
          </Text>
        </div>
        <div className="featured_box2">
          <div className="featured_sub_box">
            <p>Gifts & Value Sets</p>
            <img
              src="https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/gifts%2032@3x.png?imwidth=53"
              alt="img"
            />
          </div>
          <div className="featured_sub_box">
            <p>Luxe Skin</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/luxury_beauty.svg"
              alt="img"
            />
          </div>
          <div className="featured_sub_box">
            <p>Makeup Under $25</p>
            <img
              src="https://www.sephora.com/contentimages/homepage/100422/Homepage/RWD/under25%2032@3x.jpg?imwidth=53"
              alt="img"
            />
          </div>
          <div className="featured_sub_box">
            <p>Moisturizers</p>
            <img
              src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=53"
              alt="img"
            />
          </div>
          <div className="featured_sub_box">
            <p>Hair Styling & Treatments</p>
            <img
              src="https://www.sephora.com/contentimages/homepage/091322/Homepage/RWD/hair%20dryer.JPG?imwidth=53"
              alt="img"
            />
          </div>
          <div className="featured_sub_box">
            <p>Perfume</p>
            <img
              src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg?imwidth=53"
              alt="img"
            />
          </div>
          <div className="featured_sub_box">
            <p>Sephora Collection</p>
            <img
              src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_sephoracollection_SC_us_ca_rwd_slice.jpg?imwidth=53"
              alt="img"
            />
          </div>
          <div className="featured_sub_box">
            <p>Jumbos</p>
            <img
              src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_samples_32_us_ca_rwd_slice.png?imwidth=53"
              alt="img"
            />
          </div>
        </div>
      </div>
      <hr style={{ margin: "50px 0" }} />
    </>
  );
};

export default FeaturedCategories;
