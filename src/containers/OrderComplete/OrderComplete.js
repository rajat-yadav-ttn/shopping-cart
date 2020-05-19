import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import "./OrderComplete.css";

class OrderComplete extends Component {
  state = {};

  render() {
    return (
      <Switch>
        <div className="container order-complete center">
          <h2>Your Order has been placed.</h2>

          <div className="complete-msg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              metusneque, pharetra accumsan rhoncus
            </p>
          </div>
          <Link to="/" className="next-btn continue-shop-btn">
            Continue Shopping
          </Link>
        </div>
      </Switch>
    );
  }
}

export default OrderComplete;
