import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/login";
// import Phonelogin from "../components/Auth/Phonelogin";
import Signup from "../components/Auth/signup";
import Dashboard from "../components/Dashboard";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import AdminRoutes from "../pages/Admin/AdminRoutes";
import Home from "../pages/home/Home";
import MyOrder from "../pages/my-orders/MyOrder";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkoutPage/Checkout";
import MyWishlist from "../pages/my-wishlist/MyWishlist";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Product from "../pages/product/Product";
import ANavbar from "../pages/Admin/ANavbar";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminNavbar" element={<ANavbar/>}/>
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
              <MyWishlist />
              <Footer />
            </>
          }
        />
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
        <Route
          path="/admin"
          element={
            <>
              <AdminRoutes />
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

        {/* <Route path="/phonelogin" element={<Phonelogin />} /> */}
      </Routes>
    </div>
  );
}
