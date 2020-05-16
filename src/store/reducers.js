import Products from "../data/products.json";

const initialState = {
  items: Products,
  addedItems: [],
  subTotal: 0,
  isCartEmpty: true,
  quantity: 0,
  inCart: false,
  shipping: 0,
  delivery: 99,
  total: 0,
  itemToRemove: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let addedItem = state.items.find((item) => item.id === action.id);
      let existed_item = state.addedItems.find((item) => action.id === item.id);
      if (existed_item) {
        addedItem.quantity += 1;
        let deliveryCharges =
          state.addedItems.length === 0
            ? 0
            : state.subTotal + addedItem.price >= 500
            ? 0
            : 99;

        return {
          ...state,
          subTotal: state.subTotal + addedItem.price,
          delivery: deliveryCharges,
          total: addedItem.price + deliveryCharges,
        };
      } else {
        addedItem.quantity = 1;
        addedItem.inCart = true;
        let newsubTotal = state.subTotal + addedItem.price;
        let deliveryCharges = newsubTotal >= 500 ? 0 : 99;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          subTotal: newsubTotal,
          isCartEmpty: false,
          delivery: deliveryCharges,
          total: newsubTotal + deliveryCharges,
        };
      }

    case "ADD_QUANTITY":
      addedItem = state.items.find((item) => item.id === action.id);
      addedItem.quantity += 1;
      let addsubTotal = state.subTotal + addedItem.price;
      let deliveryChargesAdd = addsubTotal >= 500 ? 0 : 99;
      return {
        ...state,
        quantity: (state.quantity += 1),
        subTotal: addsubTotal,
        delivery: deliveryChargesAdd,
        total: addsubTotal + deliveryChargesAdd,
      };

    case "DEC_QUANTITY":
      addedItem = state.items.find((item) => item.id === action.id);
      addedItem.quantity -= 1;
      let decsubTotal = state.subTotal - addedItem.price;
      let deliveryChargesDec = decsubTotal >= 500 ? 0 : 99;
      return {
        ...state,
        quantity: (state.quantity -= 1),
        subTotal: decsubTotal,
        delivery: deliveryChargesDec,
        total: decsubTotal + deliveryChargesDec,
      };

    case "REMOVE_ITEM":
      let itemToRemove = state.addedItems.find((item) => action.id === item.id);
      let updatedItems = state.addedItems.filter(
        (item) => action.id !== item.id
      );
      let remsubTotal =
        state.subTotal - itemToRemove.price * itemToRemove.quantity;
      itemToRemove.quantity = 0;
      let deliveryChargesRem = remsubTotal >= 500 ? 0 : 99;
      deliveryChargesRem = updatedItems.length === 0 ? 0 : deliveryChargesRem;
      return {
        ...state,
        addedItems: updatedItems,
        subTotal: remsubTotal,
        delivery: deliveryChargesRem,
        total: remsubTotal + deliveryChargesRem,
        itemToRemove: itemToRemove,
      };

    case "SORT":
      let sorted = state.items.sort((prev, curr) => prev.price - curr.price);
      return {
        ...state,
        items: sorted,
      };

    default:
      return state;
  }
};

export default reducer;
