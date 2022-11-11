import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import AllUsers from "./AllUsers";
import Navbar from "./Navbar";
import Products from "./Products";

function AdminRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default AdminRoutes;
