import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { HiOutlineHeart } from "react-icons/hi";
import { singleProduct } from "../../utils/data";
import "./SingleProduct.css";
import DescAndReview from "../../common/descAndReview/DescAndReview";

const SingleProduct = () => {
  const { name, img, price, shortDesc, desc } = singleProduct;
  return (
    <div className="single-product">
      <section className="single-product-section">
        <div className="container single-product-container">
          <div className="single-product-img-container">
            <img src={img} alt="" />
          </div>
          <div className="add-to-cart-container">
            <div className="atc-name-heart">
              <h2 className="product-name">{name}</h2>
              <span>
                <HiOutlineHeart />
              </span>
            </div>
            <p className="product-price">${price}</p>
            <p className="short-desc">{shortDesc}</p>
            <div className="quantity-and-btn">
              <div className="product-quantity">
                <span>
                  <IoMdArrowDropleft />
                </span>
                <input type="number" defaultValue="1" />
                <span>
                  <IoMdArrowDropright />
                </span>
              </div>
              <button className="add-to-cart">Add to cart</button>
            </div>
          </div>
        </div>
      </section>
      <DescAndReview desc={desc} />
    </div>
  );
};

export default SingleProduct;
