/* eslint-disable react/prop-types */

import RecipeNutritionalFact from "./RecipeNutritionalFact";
import { FaFireAlt } from "react-icons/fa";
import { CiWheat } from "react-icons/ci";
import { BiCheese, BiCake } from "react-icons/bi";
import { IoFishOutline } from "react-icons/io5";

export default function RecipeHeader({ nutritionalFacts, name }) {
  const nutritionalFactsArray = [
    {
      id: 1,
      amount: nutritionalFacts.calories,
      category: "calories",
      Icon: FaFireAlt
    },
    {
      id: 2,
      amount: nutritionalFacts.carbohydrates,
      category: "carbs",
      Icon: CiWheat
    },
    {
      id: 3,
      amount: nutritionalFacts.fat,
      category: "fats",
      Icon: BiCheese
    },
    {
      id: 4,
      amount: nutritionalFacts.protein,
      category: "proteins",
      Icon: IoFishOutline
    },
    {
      id: 5,
      amount: nutritionalFacts.sugar,
      category: "sugars",
      Icon: BiCake
    },
  ];

  return (
    <div className="recipe-header">
      <h1>{name}</h1>
      <div className="nutritional-facts-container">
        {nutritionalFactsArray.map(({Icon, id, amount, category}) => (
          <RecipeNutritionalFact fact={{amount, category}} key={id}>
            <Icon />
          </RecipeNutritionalFact>
        ))}
      </div>
    </div>
  );
}
