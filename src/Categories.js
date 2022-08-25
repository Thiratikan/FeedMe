import * as React from "react";
import { CategoryStyle } from "./styles/FullMenu-styled";

const Categories = ({ filterItems }) => {
  return (
    <CategoryStyle>
      <div>
        <button onClick={() => filterItems("food")}>FOOD</button>
        <button onClick={() => filterItems("drink")}>DRINK</button>
        <button onClick={() => filterItems("dessert")}>DESSERT</button>
      </div>
    </CategoryStyle>
  );
};

export default Categories;
