import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import BeautyOffers from "./beauty-offers/BeautyOffers";
import BottomBanner from "./bottom-banner/BottomBanner";
import CarouselSection1 from "./carousel-1/CarouselSection1";
import FeaturedCategories from "./featured-categories/FeaturedCategories";
import ChoosenForYou from "./for-you/ChoosenForYou";
import GuidanceCategories from "./guidance/Guidance";
import InsiderRewards from "./Insider-rewards/InsiderRewards";
import JustDropped from "./Just-dropped/JustDropped";
import OfferBanner from "./offers-banner/OfferBanner";
import SellingFast from "./selling-fast/SellingFast";

const Home = () => {
  return (
    <>
      <Navbar />
      <CarouselSection1 />
      <ChoosenForYou />
      <JustDropped />
      <BeautyOffers />
      <OfferBanner />
      <SellingFast />
      <InsiderRewards />
      <FeaturedCategories />
      <GuidanceCategories />
      <BottomBanner />
      <Footer />
    </>
  );
};

export default Home;
