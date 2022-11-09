import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import BeautyOffers from './beauty-offers/BeautyOffers'
import CarouselSection1 from './carousel-1/CarouselSection1'
import ChoosenForYou from './for-you/ChoosenForYou'
import JustDropped from './Just-dropped/JustDropped'
import OfferBanner from './offers-banner/OfferBanner'
import SellingFast from './selling-fast/SellingFast'

const Home= () => {
  return (
    <>
      <Navbar/>
      <CarouselSection1/>
      <ChoosenForYou/>
      <JustDropped/>
      <BeautyOffers/>
      <OfferBanner/>
      <SellingFast/>
      <Footer/>
    </>
  )
}

export default Home;
