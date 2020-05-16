import React, { Component } from "react";
import { connect } from "react-redux";
import "./Cart.css";
import * as actions from "../../store/actions.js";
import { Link } from "react-router-dom";
// import OrderSummary from "../OrderSummary/OrderSummary";

class Cart extends Component {
  removeItem = (id) => {
    this.props.removeItem(id);
  };

  addQuantity = (id) => {
    this.props.addQuantity(id);
  };

  decQuantity = (id) => {
    this.props.decQuantity(id);
  };

  render() {
    console.log(this.props.itemToRemove);
    return (
      <div>
        <ul className="cart-nav">
          <li className="cart-nav-item cart-nav-active">1. Shopping Cart</li>
          <li className="cart-nav-item">2. Shipping Details</li>
          <li className="cart-nav-item">3. Payment</li>
        </ul>
        <div className="cart-container">
          <h3>YOUR CART</h3>

          <div className="cart-items">
            {this.props.addedItems.length === 0 ? (
              <div className="center empty-cart-msg">
                <i className="fa fa-shopping-cart"></i>
                Your Cart is empty.
              </div>
            ) : (
              this.props.addedItems.map((item) => {
                return (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="item-info">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <span className="cart-item-price">
                        Price :<b>Rs {item.price}</b>
                      </span>
                    </div>
                    <div className="inc-dec-btns">
                      <button
                        onClick={() => {
                          this.addQuantity(item.id);
                        }}
                        disabled={item.quantity >= 10 ? true : false}
                        style={
                          item.quantity >= 10
                            ? { borderColor: "grey", color: "grey" }
                            : { borderColor: "#df4550", color: "#df4550" }
                        }
                      >
                        +
                      </button>
                      <div className="quantity">{item.quantity}</div>
                      <button
                        onClick={() => {
                          this.decQuantity(item.id);
                        }}
                        disabled={item.quantity <= 1 ? true : false}
                        style={
                          item.quantity <= 1
                            ? { borderColor: "grey", color: "grey" }
                            : { borderColor: "#df4550", color: "#df4550" }
                        }
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <button
                        className="remove-btn"
                        onClick={() => {
                          this.removeItem(item.id);
                        }}
                      >
                        <i className="fa fa-times"></i>
                        <div>Remove</div>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {this.props.addedItems.length !== 0 ? (
          <div className="cart-next btns-wrap">
            <Link className="next-btn" to="/shipping/shipping-details">
              Shipping Details
              <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    quantity: state.quantity,
    itemToRemove: state.itemToRemove,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(actions.removeItem(id));
    },

    addQuantity: (id) => {
      dispatch(actions.addQuantity(id));
    },
    decQuantity: (id) => {
      dispatch(actions.decQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
