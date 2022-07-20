import React from "react";

const Item = ({ choices }) => {
  return (
    <div className="section-center">
      {choices.map((itemChoice) => {
        const { id, title, img, desc } = itemChoice;
        return (
          <article key={id} className="item-choice">
            <img src={img} alt={title} className="photo" />
            <div className="intem-info">
              <header>
                <h4>{title}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Item;
