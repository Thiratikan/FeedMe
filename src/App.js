import React, { useState } from "react";
import item from "./data";
import Catagories from "./Catagories";
import Item from "./Item";

function App() {
  const [items, setItems] = useState(item);
  const [catagories, setCategories] = useState([]);

  return (
    <main>
      <section className="choice section">
        <div className="title">
          <h1>FeedMe</h1>
        </div>
        <Catagories />
        <Item />
      </section>
    </main>
  );
}

export default App;
