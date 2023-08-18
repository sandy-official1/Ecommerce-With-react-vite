import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCard, Sidebar } from "../../components";
import DropDown from "../../components/dropdown/DropDown";
import {
  childProducts,
  menProducts,
  womenProducts,
} from "../../constants/products/";
import { ProductContext } from "../../context/products/product-context";
import classes from "./products.module.css";

const Products = () => {
  const { filteredProducts, setSorting, setProducts } =
    useContext(ProductContext);

  const params = useParams();
  useEffect(() => {
    if (params.category === "men") setProducts(menProducts);
    else if (params.category === "women") setProducts(womenProducts);
    else if (params.category === "child") setProducts(childProducts);
    else setProducts(womenProducts);
  }, [params, setProducts]);

  const handleSorting = (event) => {
    const { value } = event.target;
    setSorting(value);
  };

  return (
    <div className={classes.productsPage}>
      <Sidebar />
      <main className={classes.main}>
        <DropDown style={{ marginLeft: "calc(100vw - 550px)" }} />
        <div className={classes.gridContainer}>
          {filteredProducts.length === 0 && <h3>No Products !</h3>}
          {filteredProducts &&
            filteredProducts.map((product) => (
              <ProductCard product={product} key={product.productId} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
