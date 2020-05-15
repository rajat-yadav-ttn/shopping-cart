import React, { Component } from "react";
import { connect } from "react-redux";
import "./Cart.css";
import * as actions from "../../store/actions.js";

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
    return (
      <div className="cart-bill-container">
        <div className="cart-container">
          <h4 className="heading">YOUR CART</h4>

          <div className="cart-items">
            {this.props.addedItems.length === 0 ? (
              <div className="center">Your Cart is empty.</div>
            ) : (
              this.props.addedItems.map((item) => {
                return (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-img">
                      <img
                        src="https://i.pcmag.com/imagery/reviews/03lo9RsLzRw3txoeExNaEHW-38..v_1574731241.jpg"
                        alt=""
                      />
                    </div>
                    <div className="item-info">
                      <h3>{item.name}</h3>
                      <span>
                        Price :<b>$ {item.price}</b>
                      </span>
                    </div>
                    <div className="inc-dec-btns">
                      <button
                        onClick={() => {
                          this.addQuantity(item.id);
                        }}
                      >
                        +
                      </button>
                      <div className="quantity">{item.quantity}</div>
                      <button
                        onClick={() => {
                          this.decQuantity(item.id);
                        }}
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
                        X
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        {/* Bill Container */}
        <div className="bill-container">BILL</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { addedItems: state.addedItems, quantity: state.quantity };
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
