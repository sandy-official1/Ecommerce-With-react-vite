const cartReducer = (state, action) => {
  const { type } = action;

  if (type === "ADD_CART_ITEM") {
    const { productToAdd } = action;
    const { cartItems } = state;

    const updatedCartItems = [...cartItems];

    const existingCartItemIndex = updatedCartItems.findIndex(
      (cartItem) =>
        Number(cartItem.productId) === Number(productToAdd.productId)
    );

    if (existingCartItemIndex > -1) {
      updatedCartItems[existingCartItemIndex].quantity += Number(
        productToAdd.quantity
      );
    } else {
      updatedCartItems.push(productToAdd);
    }
    // localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    return { cartItems: updatedCartItems };
  }

  if (type === "CLEAR_CART_ITEMS") {
    const { cartItemToClear } = action;
    const updatedCartItems = state.cartItems.filter(
      (cartItem) => cartItem.productId !== cartItemToClear.productId
    );

    //localStorage
    localStorage.clear();
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    return { cartItems: updatedCartItems };
  }

  return state;
};

export default cartReducer;
