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

  console.log(newChoicesArrayByType[A].url);

  return (
    <MenuStyle>
      <img src={newChoicesArrayByType[A].img} alt="" />
      <h2>{newChoicesArrayByType[A].title}</h2>
      <h3>{newChoicesArrayByType[A].desc}</h3>
      {newChoicesArrayByType[A].url && (
        <button>
          <a
            href={newChoicesArrayByType[A].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Recipe
          </a>
          <svg
            strokeWidth="4"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      )}
    </MenuStyle>
  );
}

export default RandomItem;
