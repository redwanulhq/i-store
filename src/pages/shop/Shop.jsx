import React from "react";
import "./Shop.css";
import NewsLettter from "../../common/newsLetter/NewsLettter";
import Products from "../../common/products/Products";

const Shop = () => {
  return (
    <div className="shop">
      <Products />
      <NewsLettter />
    </div>
  );
};

export default Shop;
