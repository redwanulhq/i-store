import React from "react";
import NewProducts from "../../common/newProducts/NewProducts";
import NewsLettter from "../../common/newsLetter/NewsLettter";
import Categories from "./components/categories/Categories";
import Cover from "./components/cover/Cover";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Cover />
      <Categories />
      <NewProducts />
      <NewsLettter />
    </div>
  );
};

export default Home;
