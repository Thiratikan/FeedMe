import React from "react";
import { BoxStyle, Div, ButtonSection } from "./styles/AddItemModelbox-styled";
import { OverlayStyle } from "./styles/ModelBox-styled";

// use {} to destructor props object
// make sure to put in all the props name in the {}
// ex. { isOpen, isClose }
function AddItemModelbox({ isOpen, isClose }) {
  if (!isOpen) {
    return null;
  }
  console.log(isOpen);
  return (
    // MAKE UR OWN MODAL STYLING FOR THIS COMPONENT
    <OverlayStyle>
      <BoxStyle>
        <button onClick={isClose}>X</button>

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
    </OverlayStyle>
  );
}

export default AddItemModelbox;
