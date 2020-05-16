import React, { Component } from "react";
import { connect } from "react-redux";

import "./OrderSummary.css";

class OrderSummary extends Component {
  state = {
    voucher: "",
  };

  inputHandler = (e) => {
    this.setState({ voucher: e.target.value });
  };
  render() {
    let discount = 0;

    // let total = this.props.subTotal + this.props.delivery - discount;
    return (
      <div className="order-summary-container">
        <h3 className="center">Order Summary</h3>
        <ul className="order-list">
          {this.props.addedItems.map((item) => {
            return (
              <li>
                <div>
                  <div className="order-img">
                    <img src={item.img} alt="" />
                    <div>
                      <span>{item.name}</span>
                      <span className="order-quantity">
                        Quantity : {item.quantity}
                      </span>
                      <span className="order-item-price">
                        Price: Rs. {item.price}
                      </span>
                    </div>
                  </div>
                  <div className="order-price">
                    Rs. {item.price * item.quantity}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="bill-container">
          <div className="voucher">
            <form>
              <input
                type="text"
                onChange={this.inputHandler}
                value={this.state.voucher}
                placeholder="Have a Voucher?"
              />
              <input
                type="submit"
                className="voucher-apply-btn"
                value="APPLY"
              />
            </form>
            <span className="delivery-info">
              Delivery is free for orders above Rs.500
            </span>
          </div>
          <div className="bill-row">
            <span>SUBTOTAL</span>
            <h4>Rs. {this.props.subTotal}</h4>
          </div>
          <div className="bill-row">
            <span>DELIVERY</span>

            <h4
              className="green-txt"
              style={
                this.props.delivery === 0
                  ? { color: "rgb(17, 155, 17)" }
                  : { color: "#333" }
              }
            >
              {this.props.addedItems.length === 0 ? (
                0
              ) : (
                <div> {this.props.delivery === 0 ? "FREE" : "Rs. 99"}</div>
              )}
            </h4>
          </div>
          <div className="bill-row">
            <span>DISCOUNT</span>
            <h4 className="green-txt">-Rs. {discount}</h4>
          </div>

          <div className="total-price bill-row">
            <span>TOTAL</span>
            <h4>Rs.{this.props.total}</h4>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    subTotal: state.subTotal,
    addedItems: state.addedItems,
    delivery: state.delivery,
    total: state.total,
  };
};

export default connect(mapStateToProps)(OrderSummary);
