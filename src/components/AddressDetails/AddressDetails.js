import React, { Component } from "react";

import "./AddressDetails.css";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions.js";
import { connect } from "react-redux";
import OrderSummary from "../OrderSummary/OrderSummary";

class AddressDetails extends Component {
  state = {
    firstName: "",
    lastName: "",
    address1: "",
    country: "",
    city: "",
    zip: "",
    phone: "",
    deliveryOption: false,
    hasError: false,
  };

  handleForm = (e) => {
    e.preventDefault();
    console.log(this.state.hasError);

    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.address1 !== "" &&
      this.state.country !== "" &&
      this.state.city !== "" &&
      this.state.zip !== "" &&
      this.state.phone !== "" &&
      this.state.deliveryOption !== false
    ) {
      this.props.history.push("/payment");
      this.setState({ hasError: false });
    } else {
      console.log("Fill");
      this.setState({ hasError: true });
    }
  };

  render() {
    // console.log(this.props.deliveryAddValue);
    console.log(this.props.nt);
    return (
      <div className="shipping-container">
        <div>
          <ul className="cart-nav">
            <li className="cart-nav-item cart-nav-active">1. Shopping Cart</li>
            <li className="cart-nav-item cart-nav-active">
              2. Shipping Details
            </li>
            <li className="cart-nav-item">3. Payment</li>
          </ul>
          <div>
            <h3>SHIPPING DETAILS</h3>

            {this.state.hasError ? (
              <div className="error-msg">Fill All the Details</div>
            ) : null}

            <form onSubmit={this.handleForm}>
              <div className="address-form grid-form">
                <input
                  type="text"
                  placeholder="First Name*"
                  onChange={(e) => this.setState({ firstName: e.target.value })}
                  value={this.state.firstName}
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  onChange={(e) => this.setState({ lastName: e.target.value })}
                  value={this.state.lastName}
                />
                <input
                  type="text"
                  placeholder="Address Line 1*"
                  className="full-width-input"
                  onChange={(e) => this.setState({ address1: e.target.value })}
                  value={this.state.address1}
                />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="full-width-input"
                />
                <input
                  type="text"
                  placeholder="Country*"
                  onChange={(e) => this.setState({ country: e.target.value })}
                  value={this.state.country}
                />
                <input
                  type="text"
                  placeholder="City*"
                  onChange={(e) => this.setState({ city: e.target.value })}
                  value={this.state.city}
                />
                <input
                  type="number"
                  placeholder="Zip/Postal Code*"
                  onChange={(e) => this.setState({ zip: e.target.value })}
                  value={this.state.zip}
                />
                <input
                  type="number"
                  placeholder="Phone Number*"
                  onChange={(e) => this.setState({ phone: e.target.value })}
                  value={this.state.phone}
                />

                <div>
                  <input
                    type="radio"
                    name="deliveryMode"
                    id="free-delivery"
                    value={0}
                    onChange={(e) =>
                      this.setState({ deliveryOption: e.target.value })
                    }
                    onClick={(e) => this.props.deliveryAdd(e.target.value)}
                    checked={this.state.deliveryOption === "0"}
                  />
                  <label className="delivery-opts-wrap" htmlFor="free-delivery">
                    Free Shipping
                    <span>Between 2-5 working days</span>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="deliveryMode"
                    id="next-day-delivery"
                    value={20}
                    onChange={(e) =>
                      this.setState({ deliveryOption: e.target.value })
                    }
                    onClick={(e) => this.props.deliveryAdd(e.target.value)}
                    checked={this.state.deliveryOption === "20"}
                  />
                  <label
                    className="delivery-opts-wrap"
                    htmlFor="next-day-delivery"
                  >
                    Next Day Delivery - Rs 20
                    <span>24hrs from checkout</span>
                  </label>
                </div>
              </div>
              <div className="btns-wrap">
                <Link className="prev-btn" to="/your-cart">
                  <i className="fa fa-arrow-left"></i>
                  Back To Cart
                </Link>
                <input
                  type="submit"
                  value="Go to Payment"
                  className="next-btn"
                />
                {/* <Link onClick={this.handleForm} className="next-btn">
                  Go To Payment
                </Link> */}
              </div>
            </form>
          </div>
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deliveryAddValue: state.deliveryAddValue,
    newTotal: state.newTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deliveryAdd: (value) => {
      dispatch(actions.deliveryAdd(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressDetails);
