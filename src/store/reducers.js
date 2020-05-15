import Products from "../data/products.json";

const initialState = {
  items: Products,
  addedItems: [],
  total: 0,
  isCartEmpty: true,
  quantity: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let addedItem = state.items.find((item) => item.id === action.id);
      let existed_item = state.addedItems.find((item) => action.id === item.id);
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        addedItem.inCart = true;
        let newTotal = state.total + addedItem.price;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
          isCartEmpty: false,
        };
      }

    case "ADD_QUANTITY":
      addedItem = state.items.find((item) => item.id === action.id);
      addedItem.quantity += 1;
      return {
        ...state,
        quantity: (state.quantity += 1),
      };

    case "DEC_QUANTITY":
      addedItem = state.items.find((item) => item.id === action.id);
      addedItem.quantity -= 1;
      return {
        ...state,
        quantity: (state.quantity -= 1),
      };

    case "REMOVE_ITEM":
      //   let itemToRemove = state.addedItems.find((item) => action.id === item.id);
      let updatedItems = state.addedItems.filter(
        (item) => action.id !== item.id
      );
      updatedItems.inCart = false;
      return {
        ...state,
        addedItems: updatedItems,
      };
    default:
      return state;
  }
};

export default reducer;
