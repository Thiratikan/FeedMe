import Data from "./Data";
import { MenuStyle } from "./styles/Menu-styled";

function RandomItem({ itemType }) {
  const getRandomItem = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  };

  const newChoicesArrayByType = Data.filter(
    (element) => element.category === itemType
  );

  const A = getRandomItem(0, newChoicesArrayByType.length);

  // Data[getRandomDrink(0, Data.length)]
  // Data[1]
  // THIS IS AN OBJEST OF UR FOOD, IT HAS category, desc, id, img, title

  return (
    <MenuStyle>
      <img src={newChoicesArrayByType[A].img} alt="" />
      <h2>{newChoicesArrayByType[A].title}</h2>
      <h3>{newChoicesArrayByType[A].desc}</h3>
    </MenuStyle>
  );
}

export default RandomItem;
