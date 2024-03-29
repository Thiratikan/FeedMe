import React from "react";
import { ItemStyle, ItemsContainer } from "./styles/FullMenu-styled";

const Item = ({ Data }) => {
  return (
    <ItemsContainer>
      {Data.map((menuItems) => {
        const { title, img, desc, url } = menuItems;
        return (
          <ItemStyle>
            <section>
              <img src={img} alt={title} className="photo" />
              <div>
                <h4>{title}</h4>
                <p>{desc}</p>
                <h5>{url && <a href={url}>Recipe&#10157;</a>}</h5>
              </div>
            </section>
          </ItemStyle>
        );
      })}
    </ItemsContainer>
  );
};

export default Item;
