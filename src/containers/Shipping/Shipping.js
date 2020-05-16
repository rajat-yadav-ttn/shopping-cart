import React from "react";
import "./Shipping.css";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import AddressDetails from "../../components/AddressDetails/AddressDetails";
import Payment from "../../components/Payment/Payment";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const Shipping = (props) => {
  return (
    <div className="shipping-container">
      <BrowserRouter>
        <Switch>
          <Route path="/shipping/your-cart" exact component={Cart} />
          <Route
            path="/shipping/shipping-details"
            exact
            component={AddressDetails}
          />
          <Route path="/shipping/payment" component={Payment} />
        </Switch>
      </BrowserRouter>
      <div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Shipping;
