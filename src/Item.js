import React from "react";
import { ItemStyle } from "./styles/FullMenu-styled";

const Item = ({ Data }) => {
  return (
    <ItemStyle>
      {Data.map((menuItems) => {
        const { title, img, desc, url } = menuItems;
        return (
          <section>
            <img src={img} alt={title} className="photo" />
            <div>
              <h4>{title}</h4>
              <p>{desc}</p>
              {url && <a href={url}>Recipe&#10157;</a>}
            </div>
          </section>
        );
      })}
    </ItemStyle>
  );
};

export default Item;
