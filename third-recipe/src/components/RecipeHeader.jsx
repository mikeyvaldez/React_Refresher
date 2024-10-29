/* eslint-disable react/prop-types */

import RecipeNutritionalFact from "./RecipeNutritionalFact";

export default function RecipeHeader({ nutritionalFacts }) {
  const nutritionalFactsArray = [
    {
      id: 1,
      amount: nutritionalFacts.calories,
      category: "calories",
    },
    {
      id: 2,
      amount: nutritionalFacts.carbohydrates,
      category: "carbs",
    },
    {
      id: 3,
      amount: nutritionalFacts.fat,
      category: "fats",
    },
    {
      id: 4,
      amount: nutritionalFacts.protein,
      category: "proteins",
    },
    {
      id: 5,
      amount: nutritionalFacts.sugar,
      category: "sugars",
    },
  ];

  return (
    <div className="recipe-header">
      <h1>Chai-Spiced Cheesecake Muffins</h1>
      <div className="nutritional-facts-container">
        {nutritionalFactsArray.map((fact) => (
          <RecipeNutritionalFact fact={fact} key={fact.id} />
        ))}
      </div>
    </div>
  );
}
