import React, { createContext, useCallback, useMemo, useReducer } from "react";
import productReducer from "./product-reducer";
import { filterProducts, sortProducts } from "./product.utils";

export const ProductContext = createContext();

const initialState = {
  products: [],
  filters: {
    price: [],
    color: [],
    brand: [],
  },
  sorting: [],
  searchQuery: "",
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { products, filters, sorting, searchQuery } = state;

  let filteredProducts = [];
  const setProducts = useCallback(
    (products) => dispatch({ type: "SET_PRODUCTS", products }),
    []
  );

  const setFilter = useCallback((filter) => {
    dispatch({ type: "FILTER_PRODUCTS", filter });
  }, []);

  const setSorting = useCallback((sorting_method) => {
    dispatch({ type: "SORT_PRODUCTS", sorting_method }), [];
  });

  const setSearchQuery = useCallback((query) => {
    dispatch({ type: "SEARCH_PRODUCTS", query });
  }, []);

  filteredProducts = useMemo(() => {
    // filter
    let newProducts = filterProducts(products, filters);

    // search
    newProducts = newProducts.filter(
      (product) =>
        product.brand
          .toLowerCase()
          .trim()
          .includes(searchQuery.toLowerCase().trim()) ||
        product.productName
          .toLowerCase()
          .trim()
          .includes(searchQuery.toLowerCase().trim())
    );

    // sort
    sortProducts(newProducts, sorting);

    // return
    return newProducts;
  }, [filters, products, sorting, searchQuery]);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        setProducts,
        setFilter,
        filteredProducts,
        setSorting,
        setSearchQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
