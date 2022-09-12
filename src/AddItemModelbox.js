import { useState } from "react";
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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("Drink");
  const [image, setImage] = useState("");

  const [pending, setPending] = useState("false");

  const dataSubmit = (e) => {
    e.preventDefault();
    const list = { title, desc, url, category, image };

    setPending(true);

    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: { "Content-Type": "applcation/json" },
      body: JSON.stringify(list),
    }).then(() => {
      console.log("New Menu added");
      setPending(false);
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    // MAKE UR OWN MODAL STYLING FOR THIS COMPONENT
    <OverlayStyle>
      <BoxStyle>
        <form onSubmit={dataSubmit}>
          <button onClick={isClose}>X</button>
          <h1>ADD ITEM</h1>
          <Info>
            <TopEdit>
              <Div>
                <input
                  type="text"
                  required
                  placeholder="Enter Title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Div>
              <Div>
                <input
                  type="text"
                  placeholder="Enter Description..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </Div>
              <Div>
                <input
                  type="url"
                  placeholder="Enter URL..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </Div>
            </TopEdit>

            <BottomEdit>
              <Div>
                <label>Category: </label>
                <select
                  value={category}
                  required
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Drink</option>
                  <option>Food</option>
                  <option>Dessert</option>
                </select>
              </Div>
              <Div>
                <label>Image: </label>
                <input
                  type="file"
                  accept="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </Div>
            </BottomEdit>
          </Info>

          <ButtonSection>
            {!pending && <button>Save</button>}
            {pending && <button>Loading...</button>}
          </ButtonSection>
        </form>
      </BoxStyle>
    </OverlayStyle>
  );
}

export default AddItemModelbox;
