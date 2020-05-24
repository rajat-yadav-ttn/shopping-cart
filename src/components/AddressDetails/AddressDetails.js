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
    address2: "",
    country: "",
    city: "",
    zip: "",
    phone: "",
    deliveryOption: "",
    firstNameError: false,
    lastNameError: false,
    address1Error: false,
    countryErorr: false,
    cityError: false,
    zipError: false,
    phoneError: false,
    hasError: false,
    addressDetails: {},
    first: "",
  };

  handlePhone = (e) => {
    let phone = e.target.value.slice(0, e.target.maxLength);
    this.setState({ phone: phone });
  };
  handleZIP = (e) => {
    let zip = e.target.value.slice(0, e.target.maxLength);
    this.setState({ zip: zip });
  };

  handleForm = (e) => {
    e.preventDefault();
    const addressDetails = {
      [`firstName`]: this.state.firstName,
      [`lastName`]: this.state.lastName,
      [`address1`]: this.state.address1,
      [`address2`]: this.state.address2,
      [`country`]: this.state.country,
      [`city`]: this.state.city,
      [`zip`]: this.state.zip,
      [`phone`]: this.state.phone,
      [`deliveryOption`]: this.state.deliveryOption,
    };

    this.setState({
      firstNameError: addressDetails.firstName === "" ? true : false,
      lastNameError: addressDetails.lastName === "" ? true : false,
      address1Error: addressDetails.address1 === "" ? true : false,
      countryError: addressDetails.country === "" ? true : false,
      cityError: addressDetails.city === "" ? true : false,
      zipError:
        addressDetails.zip === "" || addressDetails.zip.length < 6
          ? true
          : false,
      phoneError:
        addressDetails.phone === "" || addressDetails.phone.length < 10
          ? true
          : false,
    });

    if (
      addressDetails.firstName !== "" &&
      addressDetails.lastName !== "" &&
      addressDetails.address1 !== "" &&
      addressDetails.country !== "" &&
      addressDetails.city !== "" &&
      addressDetails.zip !== "" &&
      addressDetails.zip.length === 6 &&
      addressDetails.phone !== "" &&
      addressDetails.phone.length === 10 &&
      addressDetails.deliveryOption !== ""
    ) {
      this.props.history.push("/payment");
    } else {
      console.log("ERROR");
    }

    localStorage.setItem("shippingDetails", JSON.stringify(addressDetails));
  };

  componentDidMount() {
    let addressData = JSON.parse(localStorage.getItem("shippingDetails"));
    if (localStorage.getItem("shippingDetails")) {
      this.setState({
        firstName: addressData.firstName,
        lastName: addressData.lastName,
        address1: addressData.address1,
        address2: addressData.address2,
        country: addressData.country,
        city: addressData.city,
        zip: addressData.zip,
        phone: addressData.phone,
        deliveryOption: addressData.deliveryOption,
      });
    }
  }

  render() {
    return (
      <div className="shipping-container">
        <div>
          <ul className="cart-nav">
            <li className=" cart-nav-active">
              <Link to="/your-cart" className="cart-nav-item cart-nav-active">
                1. Shopping Cart
              </Link>
            </li>

            <li className="cart-nav-item cart-nav-active">
              2. Shipping Details
            </li>
            <li className="cart-nav-item">3. Payment</li>
          </ul>
          <div>
            <h3>SHIPPING DETAILS</h3>

            <form onSubmit={this.handleForm}>
              <div className="address-form grid-form">
                <input
                  type="text"
                  placeholder="First Name*"
                  onChange={(e) => this.setState({ firstName: e.target.value })}
                  style={
                    this.state.firstNameError
                      ? { borderColor: "red" }
                      : { borderColor: "#cecece" }
                  }
                  value={this.state.firstName}
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  onChange={(e) => this.setState({ lastName: e.target.value })}
                  style={
                    this.state.lastNameError
                      ? { borderColor: "red" }
                      : { borderColor: "#cecece" }
                  }
                  value={this.state.lastName}
                />
                <input
                  type="text"
                  placeholder="Address Line 1*"
                  className="full-width-input"
                  onChange={(e) => this.setState({ address1: e.target.value })}
                  style={
                    this.state.address1Error
                      ? { borderColor: "red" }
                      : { borderColor: "#cecece" }
                  }
                  value={this.state.address1}
                />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="full-width-input"
                  onChange={(e) => this.setState({ address2: e.target.value })}
                  value={this.state.address2}
                />
                <input
                  type="text"
                  placeholder="Country*"
                  onChange={(e) => this.setState({ country: e.target.value })}
                  style={
                    this.state.countryError
                      ? { borderColor: "red" }
                      : { borderColor: "#cecece" }
                  }
                  value={this.state.country}
                />
                <input
                  type="text"
                  placeholder="City*"
                  onChange={(e) => this.setState({ city: e.target.value })}
                  style={
                    this.state.cityError
                      ? { borderColor: "red" }
                      : { borderColor: "#cecece" }
                  }
                  value={this.state.city}
                />
                <input
                  type="number"
                  placeholder="Zip/Postal Code*"
                  onChange={this.handleZIP}
                  maxLength={6}
                  style={
                    this.state.zipError
                      ? { borderColor: "red" }
                      : { borderColor: "#cecece" }
                  }
                  value={this.state.zip}
                />
                <input
                  type="number"
                  placeholder="Phone Number*"
                  onChange={this.handlePhone}
                  maxLength={10}
                  style={
                    this.state.phoneError
                      ? { borderColor: "red" }
                      : { borderColor: "#cecece" }
                  }
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
    delivery: state.delivery,
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
