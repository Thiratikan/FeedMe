import React from "react";
import { BoxStyle, Div, ButtonSection } from "./styles/AddItemModelbox-styled";

function AddItemModelbox(open, children, onClose) {
  if (!open) return null;
  return (
    <BoxStyle>
      <button onClick={onClose}>X</button>

      <Div>
        <label>Title:</label>
        <input type="text" id="title" name="title" />
      </Div>
      <Div>
        <label>Category:</label>
        <select id="category">
          <option>Drink</option>
          <option>Food</option>
          <option>Dessert</option>
        </select>
      </Div>
      <Div>
        <label>Image:</label>
      </Div>
      <Div>
        <label>Description:</label>
        <input type="text" id="desc" name="desc" />
      </Div>
      <Div>
        <label>Link for Recipe:</label>
      </Div>

      <ButtonSection>
        <button>Save</button>
      </ButtonSection>
    </BoxStyle>
  );
}

export default AddItemModelbox;
