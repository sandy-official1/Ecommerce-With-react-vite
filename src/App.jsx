import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/navbar/Layout";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/product-details/ProductDetails";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":category" element={<Products />} />
            <Route path="details/:productID" element={<ProductDetails />} />
          </Route>

          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
