import React, { Component } from "react";

import "./ProductList.css";

import { Link, Route, BrowserRouter } from "react-router-dom";
const ProductList = (props) => {
  const link = props.name.toLowerCase();

  const searched = Products.filter((item) => {
    return this.state.searchValue === ""
      ? item
      : item.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
  });

  return <div>.</div>;
};

export default ProductList;
