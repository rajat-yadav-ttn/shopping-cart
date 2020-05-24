import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import "./ProductList.css";
import * as actions from "../../store/actions.js";

class ProductList extends Component {
  state = {};
  sortByPriceLowHigh = () => {
    this.props.sortByPriceLowHigh();
  };

  sortByRatingLowHigh = () => {
    this.props.sortByRatingLowHigh();
  };
  sortByPriceHighLow = () => {
    this.props.sortByPriceHighLow();
  };

  sortByRatingHighLow = () => {
    this.props.sortByRatingHighLow();
  };

  render() {
    return (
      <div>
        <div className="sort-btns-container">
          <span>Sort By:</span>
          <div>
            <button className="sort-by-btn">
              Price By :{this.props.priceSortMsg}
            </button>
            <div className="sort-container sort-btns">
              <ul>
                <li onClick={this.sortByPriceLowHigh}>Low To High</li>
                <li onClick={this.sortByPriceHighLow}>High To Low</li>
              </ul>
            </div>
          </div>
          <div>
            <button className="sort-by-btn">
              Rating By :{this.props.ratingSortMsg}
            </button>
            <div className="sort-container sort-btns">
              <ul>
                <li onClick={this.sortByRatingLowHigh}>Low To High</li>
                <li onClick={this.sortByRatingHighLow}>High To Low</li>
              </ul>
            </div>
          </div>
        </div>

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
                showAddBtns={true}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    addedItems: state.addedItems,
    priceSortMsg: state.priceSortMsg,
    ratingSortMsg: state.ratingSortMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(actions.addToCart(id));
    },
    sortByPriceLowHigh: () => {
      dispatch(actions.sortByPriceLowHigh());
    },
    sortByRatingLowHigh: () => {
      dispatch(actions.sortByRatingLowHigh());
    },
    sortByPriceHighLow: () => {
      dispatch(actions.sortByPriceHighLow());
    },
    sortByRatingHighLow: () => {
      dispatch(actions.sortByRatingHighLow());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
