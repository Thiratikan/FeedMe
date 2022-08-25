import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";
import Data from "./Data";
import Item from "./Item";
import { FullMenuStyle } from "./styles/FullMenu-styled";

function FullMenu() {
  let navigate = useNavigate();
  const [menuItems, setMenuItems] = useState(Data);
  const filterItems = (category) => {
    const newItem = Data.filter((items) => items.category === category);
    setMenuItems(newItem);
  };
  return (
    <FullMenuStyle>
      <h1>Menu</h1>
      <Categories filterItems={filterItems} />
      <Item Data={menuItems} />
      <div>
        <button
          onClick={() => {
            navigate("/feedtime");
          }}
        >
          &#8592;Back
        </button>
        <button
          onClick={() => {
            navigate("/Home");
          }}
        >
          Home Page
        </button>
      </div>
    </FullMenuStyle>
  );
}

export default FullMenu;
