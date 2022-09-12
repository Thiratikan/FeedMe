import React from "react";
import {
  BoxStyle,
  Div,
  ButtonSection,
  Info,
  BottomEdit,
  TopEdit,
} from "./styles/AddItemModelbox-styled";
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
        <h1>ADD ITEM</h1>
        <Info>
          <TopEdit>
            <Div>
              <input
                type="text"
                placeholder="Enter Title..."
                id="title"
                name="title"
              />
            </Div>
            <Div>
              <input
                type="text"
                placeholder="Enter Description..."
                id="desc"
                name="desc"
              />
            </Div>
            <Div>
              <input
                type="url"
                placeholder="Enter URL..."
                id="url"
                name="link"
              />
            </Div>
          </TopEdit>

          <BottomEdit>
            <Div>
              <label>Category: </label>
              <select id="category">
                <option>Drink</option>
                <option>Food</option>
                <option>Dessert</option>
              </select>
            </Div>
            <Div>
              <label>Image: </label>
              <input type="file" id="file" accept="image" />
            </Div>
          </BottomEdit>
        </Info>

        <ButtonSection>
          <button>Save</button>
        </ButtonSection>
      </BoxStyle>
    </OverlayStyle>
  );
}

export default AddItemModelbox;
