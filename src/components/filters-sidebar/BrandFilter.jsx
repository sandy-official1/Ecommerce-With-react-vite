import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/products/product-context";
import Card from "../UI/Card";
import CheckBox from "../UI/CheckBox";
import classes from "./filters.module.css";

function ColorFilter() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [displayedBrandCounts, setDisplayBrandCounts] = useState(4);
  const { setFilter, products } = useContext(ProductContext);

  // get all brands and remove duplicates
  const brands = [...new Set(products.map((item) => item.brand))];

  const handleChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedBrands((prev) => [...prev, value]);
    } else {
      setSelectedBrands((prev) => prev.filter((brand) => brand !== value));
    }
  };

  const handleMoreColorsClick = () => {
    setDisplayBrandCounts((prev) => prev + 4);
  };

  useEffect(() => {
    setFilter({ brand: selectedBrands });
  }, [selectedBrands, setFilter]);

  return (
    <Card
      title="
        Filter by Brand"
    >
      {brands.slice(0, displayedBrandCounts).map((brand) => (
        <div className={classes.container} key={brand}>
          <CheckBox id={brand} value={brand} onChange={handleChange} />

          <label htmlFor={brand}>{brand}</label>
        </div>
      ))}
      {displayedBrandCounts < brands.length && (
        <div
          onClick={handleMoreColorsClick}
          style={{
            cursor: "pointer",
            marginTop: "10px",
            fontSize: "14px",
            color: "#ff3f6c",
            marginLeft: "27px",
            fontWeight: "500",
          }}
        >
          + More
        </div>
      )}
    </Card>
  );
}

export default React.memo(ColorFilter);
