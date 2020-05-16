import React, { Component } from "react";

import "./AddressDetails.css";
import { Link } from "react-router-dom";

class AddressDetails extends Component {
  state = {};

  handleForm = (e) => {
    e.preventDefault();
    console.log(this.props.history);
  };
  render() {
    return (
      <div>
        <ul className="cart-nav">
          <li className="cart-nav-item cart-nav-active">1. Shopping Cart</li>
          <li className="cart-nav-item cart-nav-active">2. Shipping Details</li>
          <li className="cart-nav-item">3. Payment</li>
        </ul>
        <div>
          <h3>SHIPPING DETAILS</h3>

          <form>
            <div className="address-form grid-form">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input
                type="text"
                placeholder="Address Line 1"
                className="full-width-input"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                className="full-width-input"
              />
              <input type="text" placeholder="Country" />
              <input type="text" placeholder="City" />
              <input type="number" placeholder="Zip/Postal Code" />
              <input type="number" placeholder="Phone Number" />

              <div>
                <input type="radio" name="delivery-mode" id="free-delivery" />
                <label class="delivery-opts-wrap" for="free-delivery">
                  Free Shipping
                  <span>Between 2-5 working days</span>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="delivery-mode"
                  id="next-day-delivery"
                />
                <label class="delivery-opts-wrap" for="next-day-delivery">
                  Next Day Delivery - Rs 20
                  <span>24hrs from checkout</span>
                </label>
              </div>
            </div>
            <div className="btns-wrap">
              <Link className="prev-btn" to="/shipping/your-cart">
                <i className="fa fa-arrow-left"></i>
                Back To Cart
              </Link>

              <input
                type="submit"
                onClick={() => this.handleForm}
                value="Go to Payment"
                className="next-btn"
              />
              <Link to="/shipping/payment" className="next-btn">
                PAY NOW
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddressDetails;
