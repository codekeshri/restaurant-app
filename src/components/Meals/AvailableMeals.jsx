import React from "react";
import { MealItemForm } from "./MealItem/MealItemForm";
import classes from "./AvailableMeals.module.css";
import { MealItem } from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.0,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Spaghetti Carbonara",
    description: "Italian classic with creamy sauce",
    price: 15.0,
  },
  {
    id: "m6",
    name: "Pad Thai",
    description: "Thai style noodles with a tangy sauce",
    price: 13.75,
  },
];

export const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <li key={meal.id}>
      <MealItem meal={meal} />
      {/* <h3>{meal.name}</h3>
      <p>{meal.description}</p>
      <p>${meal.price.toFixed(2)}</p>
      <MealItemForm /> */}
    </li>
  ));
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};
