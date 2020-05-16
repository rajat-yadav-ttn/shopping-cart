import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
class Payment extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul className="cart-nav">
          <li className="cart-nav-item cart-nav-active">1. Shopping Cart</li>
          <li className="cart-nav-item cart-nav-active">2. Shipping Details</li>
          <li className="cart-nav-item cart-nav-active">3. Payment</li>
        </ul>
        <div>
          <h3>PAYMENT</h3>

          <div className="payment-method">
            <div className="payment-container">
              <input type="radio" name="payment-option" />
              <h3 className="pay-method">Credit Card</h3>
              <form className=" grid-form">
                <div className="payment-form">
                  <div className="card-input">
                    <input type="number" placeholder="0000 0000 0000 0000" />
                    <i className="fas fa-credit-card card-icon"></i>
                  </div>

                  <input type="text" placeholder="MM/YY" />
                  <input type="number" placeholder="CVV" />
                </div>
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="full-width-input"
                />
              </form>
            </div>
          </div>

          <div className="payment=method">
            <div className="payment-container">
              <input type="radio" name="payment-option" />
              <h3 className="pay-method">Paypal</h3>
              <div className="paypal-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  metusneque, pharetra accumsan rhoncus feugiat, interdum
                </p>
                <span>
                  <i className="fab fa-paypal fa-3x"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="btns-wrap">
            <Link className="prev-btn" to="/shipping/shipping-details">
              <i className="fa fa-arrow-left"></i>
              Back To Shipping Details
            </Link>

            <Link to="/order-complete" className="next-btn">
              PAY NOW
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
