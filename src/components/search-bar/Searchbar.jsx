import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./searchbar.module.css";
import {ProductContext} from "../../context/products/product-context";

function Searchbar(props) {
  const [isFocused, setIsFocused] = useState(false);
  const { setSearchQuery, searchQuery } = useContext(ProductContext);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  return (
    <div className={classes.container}>
      <AiOutlineSearch
        className={`${classes.searchIcon} ${isFocused ? classes.focused : ""}`}
      />
      <input
        onChange={handleChange}
        value={searchQuery}
        placeholder="Search for products or brands..."
        type="search"
        className={classes.search}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
}

export default Searchbar;
