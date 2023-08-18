import { useContext, useState } from "react";
import { ProductContext } from "../../context/products/product-context";
import classes from "./dropdown.module.css";

const DropDown = ({...rest}) => {
  const [dropDownName, setDropDownName] = useState("Recommended");
  const { setSorting } = useContext(ProductContext);

  const handleChange = (event) => {
    const value = event.target.getAttribute("value");
    const name = event.target.getAttribute("name");
    setDropDownName(name);
    setSorting(value);
  };

  return (
    <div {...rest} className={classes.dropdown}>
      <button className={classes.dropbtn}>
        Sort by: <span style={{ fontWeight: "bold" }}> {dropDownName} </span>
      </button>
      <div className={classes.dropdown_content}>
        <div onClick={handleChange} value="" name="Recommended">
          Recommended
        </div>
        <div onClick={handleChange} value="rating-decrease" name="Popularity">
          Popularity
        </div>
        <div
          onClick={handleChange}
          value="price-decrease"
          name="Price: High to Low"
        >
          Price: High to Low
        </div>
        <div
          onClick={handleChange}
          name="Price: Low to High"
          value="price-increase"
        >
          Price: Low to High
        </div>
      </div>
    </div>
  );
};
export default DropDown;
