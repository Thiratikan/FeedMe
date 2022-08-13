import React from "react";
import choices from "./data";
import { MenuStyle } from "./styles/Menu-styled";

function Food() {
  return (
    <>
      <MenuStyle>
        {choices.map((foodItem) => {
          const { id, title, img, desc } = foodItem;
          return (
            <div key={id}>
              {/* <img src={img} alt={title} />
              <h1>{title}</h1>
              <h1>{desc}</h1> */}
            </div>
          );
        })}
      </MenuStyle>
    </>
  );
}

export default Food;
