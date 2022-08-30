import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";
import Items from "./Data";
import Item from "./Item";
import { FullMenuStyle, ButtonStyle } from "./styles/FullMenu-styled";
import { Button } from "./styles/Button-styled";

function FullMenu() {
  let navigate = useNavigate();
  const [menuItems, setMenuItems] = useState(Items.data);
  const filterItems = (category) => {
    const newItem = Items.data.filter((items) => items.category === category);
    setMenuItems(newItem);
  };
  return (
    <FullMenuStyle>
      <h1>Menu</h1>
      <Categories filterItems={filterItems} />
      <ButtonStyle>
        <Button
          bc="#ffffff"
          color="#ffffff"
          onClick={() => {
            navigate("/feedtime");
          }}
        >
          &#8592;Back
        </Button>
        <Button
          bc="#ffffff"
          color="#ffffff"
          onClick={() => {
            navigate("/Home");
          }}
        >
          Home Page
        </Button>
      </ButtonStyle>
      <Item Data={menuItems} />
    </FullMenuStyle>
  );
}

export default FullMenu;
