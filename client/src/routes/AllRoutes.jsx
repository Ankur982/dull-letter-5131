import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/login";
// import Phonelogin from "../components/Auth/Phonelogin";
import Signup from "../components/Auth/signup";
import Dashboard from "../components/Dashboard";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import MyOrder from "../pages/my-orders/MyOrder";
import MyWishlist from "../pages/my-wishlist/MyWishlist";
import Product from "../pages/product/Product";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          } />
        <Route path="/signup" element={
           <>
           <Navbar />
           <Signup />
           <Footer />
         </>
        } />
        <Route
          path="/myoders"
          element={
            <>
              <Navbar />
              <MyOrder />
              <Footer />
            </>
          }
        />
        <Route
          path="/mywishlists"
          element={
            <>
              <Navbar />
              <MyWishlist />
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <Product />
              <Footer />
            </>
          }
        />
        <Route
          path="/products/id"
          element={
            <>
              <Navbar />
              <MyWishlist />
              <Footer />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Navbar />
              <MyWishlist />
              <Footer />
            </>
          }
        />

        {/* <Route path="/phonelogin" element={<Phonelogin />} /> */}
      </Routes>
    </div>
  );
}
