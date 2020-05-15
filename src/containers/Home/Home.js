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

  handleAddCart = (id) => {
    this.props.addToCart(id);
  };

  render() {
    console.log(this.props.addedItems);
    return (
      <div>
        <div className="showcase">
          <div className="container center">
            <div className="showcase-content">
              <p className="tagline">
                Whatever you’ve got in mind, we’ve got inside.
              </p>
              <div className="bottom-line"></div>
              <form className="input-container">
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
                  className="search-btn main-btn search-btn"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="product-container">
          <section className="section section-products-list">
            <div className="container">
              <div className="center heading">Products</div>

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
                      handleAddCart={() => this.handleAddCart(i.id)}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
