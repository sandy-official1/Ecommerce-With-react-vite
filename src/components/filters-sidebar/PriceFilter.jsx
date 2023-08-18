import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/products/product-context";
import Card from "../UI/Card";
import CheckBox from "../UI/CheckBox";
import classes from "./filters.module.css";

// define the price ranges
const priceRanges = [
  { min: 124, max: 4043 },
  { min: 4043, max: 7962 },
  { min: 7962, max: 11881 },
  { min: 11881, max: 15800 },
];

const FilterByPrice = () => {
  const { setFilter } = useContext(ProductContext);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const handlePriceChange = (event) => {
    const { value, checked } = event.target;
    const [minPrice, maxPrice] = value.split("-").map(Number);

    if (checked) {
      setSelectedPrices((prev) => [...prev, { minPrice, maxPrice }]);
    } else {
      setSelectedPrices((prev) =>
        prev.filter(
          (price) => price.minPrice !== minPrice && price.maxPrice !== maxPrice
        )
      );
    }
  };

  useEffect(() => {
    if (selectedPrices.length > 0) {
      const minPrice = Math.min(
        ...selectedPrices.map((price) => price.minPrice)
      );
      const maxPrice = Math.max(
        ...selectedPrices.map((price) => price.maxPrice)
      );
      setFilter({ price: [{ minPrice, maxPrice }] });
    } else {
      setFilter({ price: [] });
    }
  }, [setFilter, selectedPrices]);


  return (
    <Card title="Filter by Price">
      {priceRanges.map(({ min, max }) => (
        <div className={classes.container} key={`${min}-${max}`}>
          <CheckBox
            id={`${min}-${max}`}
            value={`${min}-${max}`}
            onChange={handlePriceChange}
          />

          <label htmlFor={`${min}-${max}`}>
            Rs. {min} to Rs. {max}
          </label>
        </div>
      ))}
    </Card>
  );
};

export default FilterByPrice;
