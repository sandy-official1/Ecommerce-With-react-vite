import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/products/product-context";
import Card from "../UI/Card";
import CheckBox from "../UI/CheckBox";
import classes from "./filters.module.css";

function ColorFilter() {
  const [selectedColors, setSelectedColors] = useState([]);
  const [displayedColorsCount, setDisplayedColorsCount] = useState(4);
  const { setFilter, products } = useContext(ProductContext);

  let colors = [...new Set(products.map((item) => item.primaryColour))];

  const handleChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedColors((prev) => [...prev, value]);
    } else {
      setSelectedColors((prev) => prev.filter((color) => color !== value));
    }
  };

  const handleMoreColorsClick = () => {
    setDisplayedColorsCount((prev) => prev + 4);
  };

  useEffect(() => {
    setFilter({ color: selectedColors });
  }, [selectedColors, setFilter]);

  return (
    <Card
      title="
        Filter by Color"
    >
      {colors.slice(0, displayedColorsCount).map((color) => (
        <div className={classes.container} key={color}>
          <CheckBox id={color} value={color} onChange={handleChange} />
          <div
            style={{
              backgroundColor: color,
              height: "10px",
              width: "10px",
              borderRadius: "100%",
              display: "inline-block",
              marginLeft: "10px",
            }}
          />
          <label htmlFor={color}>{color}</label>
        </div>
      ))}
      {displayedColorsCount < colors.length && (
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
