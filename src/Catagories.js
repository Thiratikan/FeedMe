import React from "react";

const Catagories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("all")}>
        all
      </button>
      <button className="filter-btn" onClick={() => filterItems("drink")}>
        drink
      </button>
    </div>
  );
};

export default Catagories;
