import React from "react";
import "./Product.css";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgSearch } from "react-icons/cg";

const Product = ({ product }) => {
    const { img, name, price } = product;
    return (
        <div className="product-box">
            <div className="product-img-container">
                <img className="product-img" src={img} alt="" />
                <div className="product-action-btns">
                    <div>
                        <a href="#">
                            <HiOutlineHeart />
                        </a>
                        <a href="#">
                            <CgSearch />
                        </a>
                        <a href="#">
                            <HiOutlineShoppingCart />
                        </a>
                    </div>
                </div>
            </div>
            <div className="product-box-footer">
                <p className="product-name">{name}</p>
                <p className="product-name">${price}</p>
            </div>
        </div>
    );
};

export default Product;
