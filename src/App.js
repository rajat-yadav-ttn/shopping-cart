import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import About from "./containers/Others/About";
import Help from "./containers/Others/Help";
import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./containers/shop/shop";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import ProductList from "./components/ProductList/ProductList";

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
          <Route path="/:id" exact component={ProductDescription} />
        </Switch>
      </div>
    );
  }
}

export default App;
