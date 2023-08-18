import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./product-details.module.css";
import { ProductContext } from "../../context/products/product-context";
import ProductInfo from "./ProductInfo";
import ImageInfo from "./ImageInfo";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const param = useParams();
  const navigate = useNavigate();
  const { productID } = param;
  const product = products.find(
    (element) => Number(element.productId) === Number(productID)
  );

  return (
    <div className={classes.container}>
      {product && (
        <>
          <ImageInfo product={product} />
          <ProductInfo product={product} />
        </>
      )}

      {!product && (
        <button
          onClick={() => navigate("/")}
          style={{ padding: "10px 16px", border: "1.5px solid #ff3e6c" }}
        >
          Go back to main page
        </button>
      )}
    </div>
  );
};

export default ProductDetails;
