import React, { Component } from "react";
import { connect } from "react-redux";

import "./OrderSummary.css";
import * as actions from "../../store/actions";
class OrderSummary extends Component {
  state = {
    voucher: "",
    totalAmount: 0,
  };

  componentDidMount() {
    this.setState({ totalAmount: this.props.total });
  }

  voucherInput = (e) => {
    this.setState({ voucher: e.target.value });
  };

  voucherSubmit = (e) => {
    e.preventDefault();
    this.props.Voucher(this.state.voucher);
  };

  render() {
    console.log("V " + this.props.voucher);

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
          <div className="voucher-msg">Available Voucher: 20OFF</div>
          <div className="voucher">
            <form onSubmit={this.voucherSubmit}>
              <input
                type="text"
                onChange={this.voucherInput}
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
                <div>
                  <span>
                    {" "}
                    {this.props.delivery === 0
                      ? "FREE"
                      : `Rs. ${this.props.delivery}`}
                  </span>

                  {this.props.deliveryAddValue !== "0" ? (
                    <span>+ {this.props.deliveryAddValue}</span>
                  ) : null}
                </div>
              )}
            </h4>
          </div>
          <div className="bill-row">
            <span>DISCOUNT</span>
            <h4 className="green-txt">Rs. {this.props.discount} OFF</h4>
          </div>

          <div className="total-price bill-row">
            <span>TOTAL</span>
            <h4>
              Rs.
              {this.props.total +
                this.props.deliveryAddValue -
                this.props.discount}
            </h4>
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
    total: state.total,
    delivery: state.delivery,
    deliveryAddValue: state.deliveryAddValue,
    voucher: state.voucher,
    discount: state.discount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Voucher: (value) => {
      dispatch(actions.Voucher(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
