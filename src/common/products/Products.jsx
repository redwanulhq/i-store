import React from "react";
import { newProducts } from "../../utils/data";
import Product from "../product/Product";
import "./Products.css";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="shop-category-container">
          <div className="shop-categories">
            <p>
              <span>All</span> / <span>Men</span> / <span>Women</span>
            </p>
          </div>
          <div className="filter">
            <span>Filter</span>
          </div>
        </div>
        <div className="products-container">
          {newProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className="load-more">
          <span>Load More</span>
        </div>
      </div>
    </section>
  );
};

export default Products;
