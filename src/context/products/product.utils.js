export const sortProducts = (products, sorting) => {
  if (!sorting?.length) return products;
  const { method, property } = sorting[0];
  if (method === "decrease") {
    products.sort((a, b) => b[property] - a[property]);
  } else {
    products.sort((a, b) => a[property] - b[property]);
  }
};

export const filterProducts = (products, { price, brand, color }) => {
  if (price.length === 0 && color.length === 0 && brand.length === 0) {
    return products;
  }
  const brandSet = new Set(brand?.map((brand) => brand.toLowerCase()));
  const colorSet = new Set(color?.map((color) => color.toLowerCase()));

  const minPrice = price?.[0]?.minPrice;
  const maxPrice = price?.[0]?.maxPrice;

  return products.filter((product) => {
    let passOrFail = false;
    // color
    if (colorSet.size > 0) {
      passOrFail = colorSet.has(product.primaryColour.toLowerCase());
    }

    // brand
    if (brandSet.size > 0) {
      passOrFail = brandSet.has(product.brand.toLowerCase());
    }

    // price
    if (minPrice && maxPrice) {
      passOrFail = product.price >= minPrice && product.price <= maxPrice;
    }

    return passOrFail;
  });
};
