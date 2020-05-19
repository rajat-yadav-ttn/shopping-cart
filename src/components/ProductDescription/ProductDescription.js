import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductDescription.css";
import * as actions from "../../store/actions.js";

const Review = (props) => {
  let ratings = [];
  for (let i = 0; i < props.rate; i++) {
    ratings.push("grey");
  }
  return (
    <div className="review">
      <div className="user-info">
        <div className="user-name">{props.name}</div>
        <div className="review-date">{props.date}</div>
        <div>
          {ratings.map((rating) => {
            return <span className="star-desc">&#9733;</span>;
          })}
        </div>
      </div>
      <div className="review-content">{props.review}.</div>
    </div>
  );
};

class ProductDescription extends Component {
  state = {
    galleryImg: [],
    thumbImg: this.props.items.img,
  };

  componentDidMount() {
    let product = this.props.items.find((i) => {
      return this.props.match.params.id === i.name.toLowerCase();
    });
    this.setState({ thumbImg: product.img, galleryImg: product.gallery });
  }

  handleImgView = (id) => {
    let thumbImg = this.state.galleryImg.find((i) => i.imgId === id);
    this.setState({ thumbImg: thumbImg.imgUrl });
  };

  render() {
    const product = this.props.items.find((i) => {
      return this.props.match.params.id === i.name.toLowerCase();
    });

    console.log(this.props.match);

    let ratings = [];
    for (let i = 0; i < product.rating; i++) {
      ratings.push("grey");
    }

    return (
      <div>
        <div className="description-container">
          <div className="desc-container">
            <div className="desc-img-info">
              <div className="desc-img">
                <div className="main-img">
                  <img src={this.state.thumbImg} alt="" />
                </div>
                <div className="img-gallery-container">
                  {product.gallery.map((img) => {
                    return (
                      <div key={img.imgId} className="gallery-img">
                        <img
                          src={img.imgUrl}
                          alt=""
                          onClick={() => this.handleImgView(img.imgId)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="desc-info">
                <h1 className="product-name">{product.name}</h1>
                <span key={product.id}>
                  {ratings.map((rating) => {
                    return <span className="star-desc">&#9733;</span>;
                  })}
                </span>
                <span className="reviews">
                  {product.reviews.length} Reviews
                </span>

                <div className="price-btn-wrap">
                  <div className="desc-price">Rs. {product.price}</div>
                  <div>
                    {product.quantity === 0 ? (
                      <button
                        onClick={() => {
                          this.props.addToCart(product.id);
                        }}
                        className="add-to-cart-btn"
                      >
                        <i className="fa fa-shopping-bag"></i>
                        ADD TO CART
                      </button>
                    ) : (
                      <Link to="/your-cart" className="add-to-cart-btn">
                        <i className="fa fa-arrow-right"></i>
                        GO TO CART
                      </Link>
                    )}
                  </div>
                </div>
                <div className="product-description">
                  <h3>Product Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla metus neque, pharetra accumsan rhoncus feugiat,
                    interdum cursus ipsum. Nulla facilisi. Nunc mi lorem, luctus
                    a ultricies eu, vehicula at lectus. Etiam quis consectetur
                    mauris. Pellentesque tempus nunc neque, quis dictum nisl
                    ultricies et. Proin leo ante, malesuada a auctor a, placerat
                    a eros. Praesent ut tempus sem. Nulla eu metus et magna
                    euismod commodo at nec diam.rem
                  </p>
                </div>
              </div>
            </div>

            <div className="reviews-container">
              <h2>Reviews</h2>
              {product.reviews.map((review) => {
                return (
                  <Review
                    key={review.index}
                    name={review.name}
                    date={review.date}
                    rate={review.rate}
                    review={review.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    items: state.items,
    subTotal: state.subTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(actions.addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);
