/* eslint-disable react/jsx-key */
import Card from "./Card";

export const recipes = [
  {
    id: 1,
    name: "Chicken Sandwich",
    image:
      "https://static01.nyt.com/images/2021/07/06/dining/yk-muhammara-chicken-sandwiches/merlin_189026502_58171dd4-b0bc-47c3-aa6a-d910a3f1de4c-superJumbo.jpg",
    tag: "Easy lunch",
    numberOfMinutes: 60,
  },
  {
    id: 2,
    name: "Chili Cheese Fries",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsI10cEWaY_1FevsEBcsh18_S6ha9dX0XBQ&s",
    tag: "American Dinner",
    numberOfMinutes: 50,
  },
  {
    id: 3,
    name: "Fried Fish",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8gXQlqeIps2q5gAwlz0mGKav-Y5YM-7WDvw&s",
    tag: "SeaFood",
    numberOfMinutes: 30,
  },
  {
    id: 4,
    name: "Steak Salad",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRoVHl9_EXagJTId7lq1vQ7OmZhMjweTYsXA&s",
    tag: "Tastey Healthy Lunch",
    numberOfMinutes: 40,
  },
];

export default function CardList() {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
