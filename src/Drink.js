import choices from "./data";
import { MenuStyle } from "./styles/Menu-styled";

function Drink(choices) {
  const getRandomDrink = (min, max) => {
    min = Math.ceil(0);
    max = Math.floor(choices.length);

    return Math.floor(Math.random() * (max - min) + min);
  };
  console.log(getRandomDrink(0, choices.length));
  return <MenuStyle>{choices[getRandomDrink(0, choices.length)]}</MenuStyle>;
}

export default Drink;
