import React from "react";

import "./ProductDescription.css";
import { Route, Switch } from "react-router-dom";
import Products from "../../data/products.json";

const Child = ({ match }) => {
  console.log(match);
  const prod = Products.find((i) => {
    return match.params.id === i.name.toLocaleLowerCase();
  });
  return (
    <div>
      {
        <div>
          <h1>{prod.name}</h1>
          <h2>{prod.rating}</h2>
        </div>
      }
    </div>
  );
};

const ProductDescription = () => {
  return (
    <div>
      <div>
        <Switch>
          <Route path="/:id" exact component={Child} />
        </Switch>
      </div>
    </div>
  );
};
export default ProductDescription;
