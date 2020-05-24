import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import About from "./containers/Others/About";
import Help from "./containers/Others/Help";
import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./containers/shop/shop";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import OrderComplete from "./containers/OrderComplete/OrderComplete";
import Cart from "./components/Cart/Cart";
import AddressDetails from "./components/AddressDetails/AddressDetails";
import Payment from "./components/Payment/Payment";
import Search from "./components/Search/Search";
import NoPageFound from "./containers/NoPageFound/NoPageFound";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route path="/shop" component={Shop} />
          <Route path="/:cat/:id" component={ProductDescription} />
          <Route path="/your-cart" component={Cart} />
          <Route path="/order-complete" component={OrderComplete} />
          <Route path="/search-results" component={Search} />
          {this.props.addedItems.length === 0 ? (
            <Route path="*" exact component={NoPageFound} />
          ) : (
            <div>
              <Route path="/shipping-details" component={AddressDetails} />
              <Route path="/payment" component={Payment} />
            </div>
          )}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
  };
};

export default connect(mapStateToProps)(App);
