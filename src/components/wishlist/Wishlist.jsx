import { useContext } from "react";
import { AiOutlineClear, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../../context/wishlist/wishlist-context";
import classes from "./wishlist.module.css";

const Wishlist = () => {
  const { wishlist, wishlistShownHandler, clearItemFromWishlist } =
    useContext(WishlistContext);

  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <AiOutlineClose
        onClick={wishlistShownHandler}
        size={30}
        className={classes.closeButton}
      />

      {wishlist?.length === 0 && (
        <h2 style={{ textAlign: "center", marginTop: "30%" }}>
          Wishlist is Empty!
        </h2>
      )}

      {wishlist?.map((item) => (
        <div className={classes.subContainer} key={item.productId}>
          <img
            className={classes.image}
            src={item?.images[0]?.src}
            alt={item?.images[0]?.alt}
          />

          <h1
            className={classes.brand}
            onClick={() => navigate(`/products/details/${item.productId}`)}
          >
            {item.brand}
            <div className={classes.subBrand}>
              {item.productName.slice(
                item.brand.length,
                item.productName.length
              )}
            </div>
          </h1>
          <AiOutlineClear
            onClick={() => clearItemFromWishlist(item)}
            size={35}
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
