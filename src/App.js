import React, { useState } from "react";
import choices from "./data";
import Catagories from "./Catagories";
import Item from "./Item";

function App() {
  const [itemChoice, setItems] = useState(choices);
  const [catagories, setCategories] = useState([]);

  return (
    <main>
      <section className="choice section">
        <div className="title">
          <h1>FeedMe</h1>
        </div>
        <Catagories />
        <Item choices={itemChoice} />
      </section>
    </main>
  );
}

export default App;
