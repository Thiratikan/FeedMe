import * as React from "react";

const Categories = ({ filterItems }) => {
  return (
    <div>
      <button onClick={() => filterItems("food")}>Food</button>
      <button onClick={() => filterItems("drink")}>Drink</button>
      <button onClick={() => filterItems("dessert")}>Dessert</button>
    </div>
  );
};

export default Categories;
