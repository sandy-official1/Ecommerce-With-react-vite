const wishListReducer = (state, action) => {
  const { type } = action;

  if (type === "ADD_WISHLIST_ITEM") {
    const { productToAdd } = action;

    const updatedWishlistItem = [...state];

    const existingCartItemIndex = updatedWishlistItem.findIndex(
      (cartItem) =>
        Number(cartItem.productId) === Number(productToAdd.productId)
    );

    if (existingCartItemIndex > -1) {
      return updatedWishlistItem;
    } else {
      updatedWishlistItem.push(productToAdd);
    }
    // localStorage
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlistItem));
    return updatedWishlistItem;
  }

  if (type === "CLEAR_WISHLIST_ITEMS") {
    const { itemToClear } = action;
    const updatedWishlistItem = state.filter(
      (cartItem) => cartItem.productId !== itemToClear.productId
    );

    //localStorage
    localStorage.clear();
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlistItem));

    return updatedWishlistItem;
  }

  return state;
};

export default wishListReducer;
