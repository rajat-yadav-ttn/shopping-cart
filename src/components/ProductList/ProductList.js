import React, { Component } from "react";

import "./ProductList.css";

import { Link, Route, BrowserRouter } from "react-router-dom";
const ProductList = (props) => {
  const link = props.name.toLowerCase();
  return (
    <div>
      <Link to={link}>
        <div className="product-container">
          <div className="product-img">
            <img src={props.img} alt={props.name} />
          </div>
          <div>
            <h4>{props.name}</h4>
            <span>{props.rating}</span>
            <div>{props.price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
