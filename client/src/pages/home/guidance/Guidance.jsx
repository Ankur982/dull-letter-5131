import { Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import "./Guidance.css";

const GuidanceCategories = () => {
  return (
    <div className="guidance_container">
      <div className="guidance_box1">
        <Heading as="h4" size="md">
          {" "}
          Need a Little Guidance?{" "}
        </Heading>
        <Text fontSize="md" ml="0px" mt="5px" fontWeight="500">
          Check out our
          <Link href="https://chakra-ui.com" isExternal>
            quizzes and buying guides.
          </Link>
        </Text>
      </div>
      <div className="guidance_box2">
        <div className="guidance_sub_box">
          <p>Gifting Quiz</p>
          <img
            src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/gift_finder.svg"
            alt="img"
          />
        </div>
        <div className="guidance_sub_box">
          <p>Clean Beauty</p>
          <img
            src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_guide.svg"
            alt="img"
          />
        </div>
        <div className="guidance_sub_box">
          <p>Foundation Quiz</p>
          <img
            src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/foundation_guide.svg"
            alt="img"
          />
        </div>
        <div className="guidance_sub_box">
          <p>Skincare Routine Builder</p>
          <img
            src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_age.svg"
            alt="img"
          />
        </div>
        <div className="guidance_sub_box">
          <p>Shiny Hair Guide</p>
          <img
            src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_healthy%20scalp%20guide_us_ca_rwd_slice.png?imwidth=53"
            alt="img"
          />
        </div>
        <div className="guidance_sub_box">
          <p>Fragrance Hub</p>
          <img
            src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/niche_fragrances.svg"
            alt="img"
          />
        </div>
        <div className="guidance_sub_box">
          <p>Clinical Skincare</p>
          <img
            src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_quiz.svg"
            alt="img"
          />
        </div>
        <div className="guidance_sub_box">
          <p>Black-Owned Brands</p>
          <img
            src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_BOB_us_rwd_slice.png?imwidth=53"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default GuidanceCategories;
