import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = (props) => {
  let ratings = [];
  for (let i = 0; i < props.rating; i++) {
    ratings.push("grey");
  }

  const link = props.name.toLowerCase();

  // console.log(props.quantity);
  return (
    <div className="product-item">
      <div className="product-container">
        <Link to={`/${props.category}/${link}`}>
          <div className="product-img">
            <img src={props.img} alt={props.name} />
          </div>
          <div className="product-info">
            <h3>{props.name}</h3>
            <div className="product-price">Rs. {props.price}</div>
            {ratings.map((rating) => {
              return <span className="star">&#9733;</span>;
            })}
          </div>
        </Link>
        <div className="add-btn-wrapper">
          {props.quantity !== 0 ? (
            <Link to="/your-cart" className="check-btn">
              <i className="fa fa-check check-icon"></i>
            </Link>
          ) : (
            <button onClick={props.handleAddCart} className="add-btn">
              <div>+</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
