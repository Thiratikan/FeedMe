import Data from "./Data";
import { MenuStyle } from "./styles/Menu-styled";

function Drink({ itemType }) {
  const getRandomDrink = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  };

  const mapMenu = Data.map((foodItem) => {
    const { id, title, img, desc } = foodItem;
    return (
      <div key={id}>
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <h1>{desc}</h1>
      </div>
    );
  });

  const newChoicesArrayByType = Data.filter(
    (element) => element.category === itemType
  );

  // Data[getRandomDrink(0, Data.length)]
  // Data[1]
  // THIS IS AN OBJEST OF UR FOOD, IT HAS category, desc, id, img, title

  return (
    <MenuStyle>
      <h2>
        {newChoicesArrayByType[getRandomDrink(0, newChoicesArrayByType.length)]}
      </h2>
    </MenuStyle>
  );
}

export default Drink;
