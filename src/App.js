import React, { useState } from "react";
import choices from "./data";
import Catagories from "./Catagories";
import Item from "./Item";
import "./index.css";

const allCategories = [
  "all",
  ...new Set(choices.map((choice) => choice.catagory)),
];

function App() {
  const [itemChoice, setItems] = useState(choices);
  const [catagories, setCategories] = useState([allCategories]);

  const filterItems = (catagory) => {
    if (catagory === "all") {
      setItems(choices);
      return;
    }
    const newItem = choices.filterItems(
      (choice) => choice.catagory === catagory
    );
    setItems(newItem);
  };

  return (
    <main>
      <section className="choice-section">
        <div className="title">
          <img src="./images/FeedMe.png" alt="feedme" class="logo" />
        </div>

        <section className="body">
          <Catagories catagories={catagories} filterItems={filterItems} />
          <Item choices={itemChoice} />
        </section>
      </section>
    </main>
  );
}

export default App;
