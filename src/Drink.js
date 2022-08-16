import choices from "./data";
import { MenuStyle } from "./styles/Menu-styled";

function Drink({ itemType }) {
  const getRandomDrink = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  };

  const newChoicesArrayByType = choices.filter(
    (element) => element.category === itemType
  );

  // choices[getRandomDrink(0, choices.length)]
  // choices[1]
  // THIS IS AN OBJEST OF UR FOOD, IT HAS category, desc, id, img, title

  return (
    <MenuStyle>
      {
        newChoicesArrayByType[getRandomDrink(0, newChoicesArrayByType.length)]
          .title
      }
    </MenuStyle>
  );
}

export default Drink;
