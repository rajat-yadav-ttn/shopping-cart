import React, { Component } from "react";
import "./Home.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import ProductItem from "../../components/ProductItem/ProductItem";

import ProductList from "../../components/ProductList/ProductList";

// import * as actions from "../../store/actions.js";

class Home extends Component {
  state = {
    searchInput: "",
  };

  handleSearchAction = (e) => {
    e.preventDefault();
    this.setState({ toSearch: this.state.searchInput });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/search-results",
      search: "",
      state: this.state.searchInput,
    });
    console.log("Search " + this.state.searchInput);
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
              <form
                onSubmit={this.handleFormSubmit}
                className="search-form input-container"
              >
                <input
                  type="text"
                  placeholder="Search"
                  // value={this.state.searchInput}
                  // onChange={this.handleSearchInput}
                  onChange={(e) =>
                    this.setState({ searchInput: e.target.value })
                  }
                  value={this.state.searchInput}
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     searchValue: (value) => dispatch(actions.searchValue(value)),
//   };
// };
export default connect(mapStateToProps)(withRouter(Home));
