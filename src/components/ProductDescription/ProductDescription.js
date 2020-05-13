import React from "react";

import "./ProductDescription.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Products from "../../data/products.json";

const Child = ({ match }) => {
  console.log(match);
  const prod = Products.find((i) => {
    return match.params.id === i.name.toLocaleLowerCase();
  });
  return (
    <div>
      {match.isExact && (
        <div>
          <h1>{prod.name}</h1>
        </div>
      )}
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
