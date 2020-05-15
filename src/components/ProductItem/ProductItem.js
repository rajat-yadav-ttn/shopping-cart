import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = (props) => {
  //   const link = `${props.category.toLowerCase()}/${props.name.toLowerCase()}`;

  let ratings = [];
  for (let i = 0; i < props.rating; i++) {
    ratings.push("grey");
  }

  const link = props.name.toLowerCase();
  return (
    <div className="product-item">
      <div className="product-container">
        <div className="product-img">
          <img src={props.img} alt={props.name} />
          {props.inCart ? (
            <div className="check-btn">
              <i className="fa fa-check check-icon"></i>
            </div>
          ) : (
            <button onClick={props.handleAddCart} className="add-btn">
              +
            </button>
          )}
        </div>
        <Link to={link}>
          <div className="product-info">
            <h3>{props.name}</h3>
            <div className="product-price">${props.price}</div>
            {ratings.map((rating) => {
              return <span className="star">&#9733;</span>;
            })}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
