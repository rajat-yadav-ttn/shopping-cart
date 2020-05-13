import React, { Component } from "react";
import "./Home.css";
import Products from "../../data/products.json";

// import ProductDescription from "../../components/ProductDescription/ProductDescription";
import ProductList from "../../components/ProductList/ProductList";

// import { NavLink, BrowserRouter, Route } from "react-router-dom";

class Home extends Component {
  state = {
    searchInput: "",
    toSearch: "",
  };

  handleSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  handleSearchAction = (e) => {
    e.preventDefault();
    this.setState({ toSearch: this.state.searchInput });
  };

  render() {
    const searched = Products.filter((item) => {
      return this.state.toSearch === ""
        ? item
        : item.name.toLowerCase().includes(this.state.toSearch.toLowerCase());
    });

    console.log(this.state.toSearch);
    return (
      <div>
        <div className="showcase">
          <div className="container center">
            <div className="showcase-content">
              <p className="tagline">Tagline describing your e-shop</p>
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
                  onClick={this.handleSearchAction}
                />
              </form>
            </div>
          </div>
        </div>
        {/* {this.state.searchValue} */}

        <section className="section section-products-list">
          <div class="container">
            <div className="center heading">Products Listing</div>

            <div className="three-col-grid">
              {searched.length === 0 ? (
                <div className="no-result">No results </div>
              ) : (
                searched.map((i) => {
                  return (
                    <ProductList
                      name={i.name}
                      price={i.price}
                      rating={i.rating}
                      img={i.img}
                    />
                  );
                })
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
