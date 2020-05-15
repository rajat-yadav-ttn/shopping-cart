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
