import React, { useEffect, useState } from "react";
import choices from "./data";
import { MenuStyle } from "./styles/Menu-styled";

function Drink() {
  choices = [...Drink];
  const [randomDrink, setRandomDrink] = useState("");
  const getRandomDrink = () => {
    const randomDrink = Math.floor(Math.random() * choices.length);
    setRandomDrink(randomDrink);
  };

  return (
    <MenuStyle>
      <div id="category">{choices[randomDrink].category}</div>
    </MenuStyle>
  );
}

// function Drink() {
//     const [title, setTitle] = useState(null)

//     const [randomDrink, setRandomDrink] = useState(0);
//   const getItem = async () => {
//     const response = await fetch(choices);
//     const data = await response.json();
//     const menu = data.results[0]
//     const {title, img, desc} = menu;
//     const newItem = {title,img,desc}

//     setRandomDrink(newItem)
//   }

//   useEffect (() => {
//     getItem()
//   }, [])
//   return (
//     <MenuStyle>
//       <p>{title}</p>
//       <p>{img}</p>
//       <p>{desc}</p>

//     </MenuStyle>
//   );
// }

export default Drink;

// function Drink() {
//     const [randomDrink, setRandomDrink] = useState();
//     const getRandomDrink = () => {
//       const randomDrink = Math.floor(Math.random() * choices.length);
//       setRandomDrink(randomDrink);
//     };

//     return (
//       <MenuStyle>
//         <div id="category">{choices[randomDrink].category}</div>
//       </MenuStyle>
//     );
//   }
