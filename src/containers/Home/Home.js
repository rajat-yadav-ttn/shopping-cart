import React, { Component } from "react";
import "./Home.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import ProductItem from "../../components/ProductItem/ProductItem";

import ProductList from "../../components/ProductList/ProductList";

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

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.searchInput(this.searchInput.value);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Search" + this.searchInput.value);
    this.props.history.push(`/search/${this.searchInput.value}`);
  };

  render() {
    console.log(this.props.addedItems);
    return (
      <div>
        <header className="showcase">
          <div className="container center">
            <div className="showcase-content">
              <p className="tagline">
                Whatever you’ve got in mind, we’ve got inside.
              </p>
              <div className="bottom-line"></div>
              <form
                onSubmit={this.handleFormSubmit}
                className="search-form input-container"
              >
                <input
                  type="text"
                  placeholder="Search"
                  // value={this.state.searchInput}
                  // onChange={this.handleSearchInput}
                  onChange={this.showSearch}
                  ref={(input) => (this.searchInput = input)}
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

              <ProductList />
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
    search: state.search,
  };
};

export default connect(mapStateToProps)(withRouter(Home));
