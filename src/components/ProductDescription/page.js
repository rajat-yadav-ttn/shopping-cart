import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions.js";

class Page extends Component {
  render() {
    let ratings = [];
    for (let i = 0; i < this.props.rating; i++) {
      ratings.push("grey");
    }
    const single = ({ match }) => {
      const prod = this.props.items.find((i) => {
        return match.params.id === i.name.toLowerCase();
      });
    };

    console.log(this.props.items);
    return (
      <div>
        {this.props.items.map((item) => {
          return (
            <div className="description-container">
              <div className="desc-container">
                <div className="desc-img-info">
                  <div className="desc-img">
                    <div className="main-img">
                      <img src={this.props.img} alt="" />
                    </div>
                    <div className="img-gallery">
                      <div>
                        <img src={this.props.img} alt="" />
                      </div>
                      <div>
                        <img src={this.props.img} alt="" />
                      </div>
                      <div>
                        <img src={this.props.img} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="desc-info">
                    <h1 className="this.propsuct-name">{this.props.name}</h1>
                    <span key={this.props.id}>
                      {ratings.map((rating) => {
                        return <span className="star-desc">&#9733;</span>;
                      })}
                    </span>
                    <span className="reviews">5 Reviews</span>

                    <div className="desc-price">Rs. {this.props.price}</div>

                    <button
                      onClick={() => {
                        //   props.addToCart(this.props.id);
                        alert(this.props.id);
                      }}
                    >
                      <i className="fa fa-basket"></i>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(actions.addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
