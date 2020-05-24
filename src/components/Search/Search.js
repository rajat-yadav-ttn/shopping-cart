import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import "./Search.css";
import actions from "../../store/actions";

class Search extends Component {
  render() {
    console.log(this.props.history);
    let search = this.props.history.location.state;
    const searched = this.props.items.filter((item) => {
      return search === ""
        ? item
        : item.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
      <div className="search-container">
        <h2 className="search-heading">Search Results For ' {search} '</h2>
        <div className="three-col-grid">
          {searched.length === 0 ? (
            <div className="search-msg">No Results Found</div>
          ) : (
            searched.map((i) => {
              return (
                <div>
                  <ProductItem
                    name={i.name}
                    price={i.price}
                    rating={i.rating}
                    category={i.category}
                    img={i.img}
                    quantity={i.quantity}
                    handleAddCart={() => this.props.addToCart(i.id)}
                    inCart={i.inCart}
                    showAddBtns={false}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    addedItems: state.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(actions.addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
