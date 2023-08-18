import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../../context/cart/cart-context";
import classes from "./cart.module.css";
import { AiOutlineClear } from "react-icons/ai";

const Cart = () => {
  const {
    cartCount,
    cartItems,
    cartTotal,
    cartShownHandler,
    clearItemFromCart,
  } = useContext(CartContext);

  return (
    <div className={classes.container}>
      <AiOutlineClose
        onClick={cartShownHandler}
        size={30}
        className={classes.closeButton}
      />
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        <span>Items: {cartCount}</span>
        <span>Total: Rs.{cartTotal}</span>
      </h1>
      {cartItems?.length === 0 && (
        <h2 style={{ textAlign: "center", marginTop: "30%" }}>
          Cart is Empty!
        </h2>
      )}
      {cartItems?.map((item) => (
        <div className={classes.subContainer} key={item.productId}>
          <img
            className={classes.image}
            src={item?.images[0]?.src}
            alt={item?.images[0]?.alt}
          />
          <p style={{ fontSize: "24px", fontWeight: "800", color: "#03a685" }}>
            {item.selectedSize}
          </p>
          <p style={{ fontSize: "16px", fontWeight: "700" }}>
            x{item.quantity}
          </p>

          <h1 className={classes.brand}>
            {item.brand}
            <div className={classes.subBrand}>
              {item.productName.slice(
                item.brand.length,
                item.productName.length
              )}
            </div>
          </h1>
          <AiOutlineClear
            onClick={() => clearItemFromCart(item)}
            size={35}
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;
