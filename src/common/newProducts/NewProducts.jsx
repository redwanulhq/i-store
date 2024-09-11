import React from "react";
import "./NewProducts.css";
import { newProducts } from "../../utils/data";
import Product from "../product/Product";

const NewProducts = () => {
  return (
    <section className="new-products">
      <div className="container">
        <h3 className="section-title">New Prodcuts</h3>
        <div className="products-container">
          {newProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <button className="more-product-btn">SHOP MORE</button>
      </div>
    </section>
  );
};

export default NewProducts;
