import { useContext, useState } from "react";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import HorizontalLine from "../../components/UI/HorizontalLine";
import Ratings from "../../components/UI/Ratings";
import { CartContext } from "../../context/cart/cart-context";
import { WishlistContext } from "../../context/wishlist/wishlist-context";
import classes from "./info.module.css";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const { addItemToCart } = useContext(CartContext);
  const { addItemToWishlist } = useContext(WishlistContext);

  const sizeHandler = (size) => {
    setSelectedSize(size);
  };

  const decreaseQuantity = () => {
    if (quantity < 2) return;
    setQuantity((prev) => prev - 1);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className={classes.productInfo}>
      <h1 className={classes.brand}>{product?.brand}</h1>
      <h1 className={classes.product_name}>
        {product.productName.slice(
          product.brand.length,
          product.productName.length
        )}
      </h1>
      <HorizontalLine />
      <div style={{ marginTop: "20px" }} />
      <Ratings rating={product.rating} ratingCount={product.ratingCount} />
      <p className={classes.price}>Rs. {product.price}</p>
      <p style={{ fontSize: "14px", color: "#03a685", fontWeight: "700" }}>
        inclusive of all taxes
      </p>

      {/* some action buttons now  */}
      <div style={{ margin: "18px 0 24px" }}>
        <h4
          style={{
            fontSize: "16px",
            margin: "25px 0",
            fontWeight: "700",
          }}
        >
          SELECT SIZE
        </h4>

        {/* circles */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {product.sizes.split(",").map((item) => (
            <div
              onClick={() => sizeHandler(item)}
              style={{
                border:
                  selectedSize === item
                    ? "2px solid #03a685"
                    : "1px solid #bfc0c6",
              }}
              className={classes.sizes}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* add to cart and wishlist button */}
      <div style={{ marginBottom: "20px " }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <AiOutlineMinus
            size={30}
            onClick={decreaseQuantity}
            style={{
              border: "1px solid #bfc0c6",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          />
          <div className={classes.quantity}>{quantity}</div>
          <AiOutlinePlus
            onClick={increaseQuantity}
            size={30}
            style={{
              border: "1px solid #bfc0c6",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          />
        </div>
        <div className={classes.actions}>
          <div
            onClick={() =>
              addItemToCart({ ...product, quantity: quantity, selectedSize })
            }
            className={classes.addToBag}
          >
            <BiShoppingBag size={30} /> <span>ADD TO BAG </span>
          </div>
          <div
            onClick={() => addItemToWishlist(product)}
            className={classes.wishList}
          >
            <AiOutlineHeart size={30} /> WISHLIST
          </div>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
};

export default ProductInfo;
