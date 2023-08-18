import { createContext, useState, useEffect, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import wishListReducer from "./wishlist-reducer";

export const WishlistContext = createContext({
  isWishlistOpen: false,
  wishlistShownHandler: () => {},
  wishlist: [],
  addItemToWishlist: () => {},
  clearItemFromWishlist: () => {},
});

export const WishlistProvider = ({ children }) => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [wishlist, dispatch] = useReducer(
    wishListReducer,
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );

  const addItemToWishlist = (productToAdd) => {
    dispatch({ type: "ADD_WISHLIST_ITEM", productToAdd });
    toast.success(`Item has been added to your wishlist!`);
  };

  const clearItemFromWishlist = (itemToClear) => {
    dispatch({ type: "CLEAR_WISHLIST_ITEMS", itemToClear });
  };

  const wishlistShownHandler = () => {
    setIsWishlistOpen((prev) => !prev);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistShownHandler,
        clearItemFromWishlist,
        addItemToWishlist,
        isWishlistOpen,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
