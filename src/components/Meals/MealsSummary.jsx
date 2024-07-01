import classes from "./MealsSummary.module.css";

export const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>Delicious Food, Delivered to you</h1>
      <p>
        Choose your favorite meal from our broad selection of available meals.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time.
      </p>
    </section>
  );
};
