/* ------------------- reducer function ------------------------- */
const productReducer = (state, action) => {
  const { type } = action;

  if (type === "SET_PRODUCTS") {
    return {
      ...state,
      products: action.products,
    };
  }

  if (type === "FILTER_PRODUCTS") {
    const updatedFilters = { ...state.filters };

    // update filters
    for (const key in action.filter) {
      updatedFilters[key] = action.filter[key];
    }

    return { ...state, filters: { ...updatedFilters } };
  }

  if (type === "SORT_PRODUCTS") {
    const { sorting_method } = action;
    
    if (!sorting_method) {
      return { ...state, sorting: [] };
    }
    const [property, method] = sorting_method.split("-");

    const updatedSorting = [...state.sorting];
    updatedSorting[0] = { property, method };

    return { ...state, sorting: updatedSorting };
  }

  if (type === "SEARCH_PRODUCTS") {
    const { query } = action;
    return { ...state, searchQuery: query };
  }

  return state;
};

export default productReducer;
