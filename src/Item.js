import React from "react";

const Item = ({ choices }) => {
  return (
    <div className="section-center">
      {choices.map((itemChoice) => {
        const { id, title, img, desc } = itemChoice;
        return (
          <article key={id} className="item-choice">
            <img src="img" alt={title} className="photo" />
          </article>
        );
      })}
    </div>
  );
};

export default Item;
