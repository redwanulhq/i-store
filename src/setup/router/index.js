import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Layout from "./Layout";
import Shop from "../../pages/shop/Shop";
import SingleProduct from "../../pages/singleProduct/SingleProduct";

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:product_id" element={<SingleProduct />} />
      </Routes>
    </Layout>
  );
};

export default Router;
