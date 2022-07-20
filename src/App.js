import React, { useState } from "react";
import choices from "./data";
import Catagories from "./Catagories";
import Item from "./Item";

const allCategories = choices.map((choice) => choice.catagory);

function App() {
  const [itemChoice, setItems] = useState(choices);
  const [catagories, setCategories] = useState([]);

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
      <section className="choice section">
        <div className="title">
          <h1>FeedMe</h1>
        </div>
        <Catagories filterItems={filterItems} />
        <Item choices={itemChoice} />
      </section>
    </main>
  );
}

export default App;
