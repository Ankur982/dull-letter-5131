import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import AllOrders from "./AllOrders";
import AllUsers from "./AllUsers";
import Navbar from "./Navbar";
import Products from "./Products";

function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Products />
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <Navbar />
              <AllUsers />
            </>
          }
        />
        <Route
          path="/admin/addproduct"
          element={
            <>
              <Navbar />
              <AddProduct />
            </>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <>
              <Navbar />
              <AllOrders />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default AdminRoutes;
