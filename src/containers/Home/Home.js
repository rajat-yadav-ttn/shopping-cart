import React, { Component } from "react";
import "./Home.css";

import { connect } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";

import * as actions from "../../store/actions.js";
// import ProductDescription from "../../components/ProductDescription/ProductDescription";

class Home extends Component {
  state = {
    searchInput: "",
  };

  handleSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  handleSearchAction = (e) => {
    e.preventDefault();
    this.setState({ toSearch: this.state.searchInput });
  };

  sort = () => {
    return async () => this.props.sortProducts();
  };

  render() {
    return (
      <div>
        <header className="showcase">
          <div className="container center">
            <div className="showcase-content">
              <p className="tagline">
                Whatever you’ve got in mind, we’ve got inside.
              </p>
              <div className="bottom-line"></div>
              <form className="search-form input-container">
                <input
                  type="text"
                  placeholder="Search"
                  value={this.state.searchInput}
                  onChange={this.handleSearchInput}
                  required
                />
                <input
                  type="submit"
                  value="Search"
                  className="main-btn search-btn"
                />
              </form>
            </div>
          </div>
        </header>
        <div className="product-container">
          <section className="section section-products-list">
            <div className="container">
              <div className="center heading">Products</div>

              <button onClick={this.sort()}>sort</button>

              <div className="three-col-grid">
                {this.props.items.map((i) => {
                  return (
                    <ProductItem
                      key={i.id}
                      name={i.name}
                      price={i.price}
                      rating={i.rating}
                      category={i.category}
                      img={i.img}
                      quantity={i.quantity}
                      handleAddCart={() => this.props.addToCart(i.id)}
                      inCart={i.inCart}
                      addQuantity={() => this.addQuantity(i.id)}
                      decQuantity={() => this.decQuantity(i.id)}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    addedItems: state.addedItems,
    id: state.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(actions.addToCart(id));
    },
    sortProducts: () => {
      dispatch(actions.sortProducts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
