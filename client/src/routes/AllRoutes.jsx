import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/login";
// import Phonelogin from "../components/Auth/Phonelogin";
import Signup from "../components/Auth/signup";

import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import AdminRoutes from "../pages/Admin/AdminRoutes";
import Home from "../pages/home/home";
import MyOrder from "../pages/my-orders/MyOrder";

import MyWishlist from "../pages/my-wishlist/MyWishlist";
import Product from "../pages/product/product";
import MyAccounts from "../components/my-accounts/MyAccounts";
import Dashboard from "../components/Dashboard";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkoutPage/Checkout";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
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
          path="/myorders"
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
          path="/myaccount"
          element={
            <>
              <Navbar />
              <MyAccounts />
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
          path="/basket"
          element={
            <>
              <Navbar />
              <Cart />
              <Footer />
            </>
          }
        />

        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/products/:id"
          element={
            <>
              <Navbar />
              <SingleProduct />
              <Footer />
            </>
          }
        />
        {/* <Route
          path="/admin"
          element={
            <>
              <AdminRoutes />
            </>
          }
        /> */}

        {/* <Route path="/phonelogin" element={<Phonelogin />} /> */}
      </Routes>
    </div>
  );
}
