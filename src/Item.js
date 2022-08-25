import React from "react";

const Item = ({ Data }) => {
  return (
    <div className="section-center">
      {Data.map((menuItems) => {
        const { id, title, img, desc, url } = menuItems;
        return (
          <article key={id} className="item-choice">
            <img src={img} alt={title} className="photo" />
            <div>
              <header>
                <h4>{title}</h4>
              </header>
              <p>{desc}</p>
              {url && <a href={url}>Recipe</a>}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Item;
