import React from "react";
import "./NewsLetter.css";
import bg from "../../assets/images/bg-white-dotted.webp";
import { IoIosSend } from "react-icons/io";

const NewsLettter = () => {
  return (
    <section className="newsletter" style={{ backgroundImage: `URL(${bg})` }}>
      <div className="container">
        <h3 className="section-title">NEWSLETTERS</h3>
        <p className="newsletter-small-text">
          Get timely updates from your favorite products
        </p>
        <div className="n-input-container">
          <input type="email" placeholder="Enter Your Email" />
          <button className="newsletter-btn">
            <IoIosSend />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLettter;
