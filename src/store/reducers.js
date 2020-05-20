import Products from "../data/products.json";

const initialState = {
  items: Products,
  addedItems: [],
  subTotal: 0,
  isCartEmpty: true,
  quantity: 0,
  inCart: false,
  shipping: 0,
  delivery: 10,
  total: 0,
  itemToRemove: {},
  search: "",
  initialItems: Products,
  deliveryAddValue: 0,
  newTotal: 0,
  selectedModel: 0,
  isSelected: null,
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
            : 10;

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
        let deliveryCharges = newsubTotal >= 500 ? 0 : 10;
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
      let deliveryChargesAdd = addsubTotal >= 500 ? 0 : 10;
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
      let deliveryChargesDec = decsubTotal >= 500 ? 0 : 10;
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
      let deliveryChargesRem = remsubTotal >= 500 ? 0 : 10;
      deliveryChargesRem = updatedItems.length === 0 ? 0 : deliveryChargesRem;
      return {
        ...state,
        addedItems: updatedItems,
        subTotal: remsubTotal,
        delivery: deliveryChargesRem,
        total: remsubTotal + deliveryChargesRem,
        itemToRemove: itemToRemove,
      };

    case "SORT_LOW_HIGH_PRICE":
      let sortedPrice = state.items.sort(
        (prev, curr) => prev.price - curr.price
      );
      return {
        ...state,
        items: [...sortedPrice],
      };

    case "SORT_LOW_HIGH_RATING":
      let sortedRating = state.items.sort(
        (prev, curr) => prev.rating - curr.rating
      );
      return {
        ...state,
        items: [...sortedRating],
      };

    case "SORT_HIGH_LOW_PRICE":
      let sortedPriceHL = state.items.sort(
        (prev, curr) => curr.price - prev.price
      );
      return {
        ...state,
        items: [...sortedPriceHL],
      };

    case "SORT_HIGH_LOW_RATING":
      let sortedRatingHL = state.items.sort(
        (prev, curr) => curr.rating - prev.rating
      );
      return {
        ...state,
        items: [...sortedRatingHL],
      };

    case "SEARCH":
      return {
        ...state,
        search: action.inputValue,
      };

    case "EMPTY_CART":
      state.addedItems.forEach((i) => {
        i.quantity = 0;
      });
      return {
        ...state,
        addedItems: [],
        subTotal: 0,
        total: 0,
      };

    case "DELIVERY_ADD":
      let addedVal = parseInt(action.value, 10);
      let newDelivery = state.delivery + addedVal;
      return {
        ...state,
        // total: newTotal,
        delivery: newDelivery,
      };

    case "MODEL_SELECT":
      let id = action.id;

      return {
        ...state,
        selectedModel: id,
      };

    default:
      return state;
  }
};

export default reducer;
