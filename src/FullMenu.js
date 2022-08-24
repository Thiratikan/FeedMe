import React from "react";
import { useNavigate } from "react-router-dom";

function FullMenu() {
  let navigate = useNavigate();
  return (
    <>
      <h1>Menu</h1>
      <button>Food</button>
      <button>Drink</button>
      <button>Dessert</button>
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
    </>
  );
}

export default FullMenu;
