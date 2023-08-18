import { useContext, useState } from "react";
import Cart from "../../components/cart/Cart";
import MobFilter from "../../components/mobile-filters/MobFilter";
import { CartContext } from "../../context/cart/cart-context";
import useMediaQuery from "../../hooks/useMediaQuery";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Wishlist from "../../components/wishlist/Wishlist";
import { WishlistContext } from "../../context/wishlist/wishlist-context";

export default function Layout({ children }) {
  const isMobile = useMediaQuery("(max-width: 770px)");
  const [isShown, setIsShown] = useState(false);
  const { isCartOpen } = useContext(CartContext);
  const { isWishlistOpen } = useContext(WishlistContext);

  const handleFilters = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <>
      {isMobile ? (
        <MobileNavbar onFilterClick={handleFilters} />
      ) : (
        <DesktopNavbar />
      )}
      {isCartOpen && <Cart />}
      {isWishlistOpen && <Wishlist />}
      {isShown && <MobFilter />}
      {children}
    </>
  );
}
