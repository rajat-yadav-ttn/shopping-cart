export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    id,
  };
};

export const addQuantity = (id) => {
  return {
    type: "ADD_QUANTITY",
    id,
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    id,
  };
};

export const decQuantity = (id) => {
  return {
    type: "DEC_QUANTITY",
    id,
  };
};

export const sortByPriceLowHigh = () => {
  return {
    type: "SORT_LOW_HIGH_PRICE",
  };
};

export const sortByRatingLowHigh = () => {
  return {
    type: "SORT_LOW_HIGH_RATING",
  };
};

export const sortByPriceHighLow = () => {
  return {
    type: "SORT_HIGH_LOW_PRICE",
  };
};

export const sortByRatingHighLow = () => {
  return {
    type: "SORT_HIGH_LOW_RATING",
  };
};

export const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};

export const deliveryAdd = (value) => {
  return {
    type: "DELIVERY_ADD",
    value,
  };
};

export const Voucher = (value) => {
  return {
    type: "VOUCHER",
    value,
  };
};

export const searchValue = (inputValue) => (dispatch) => {
  dispatch({
    type: "SEARCH",
    inputValue,
  });
};
