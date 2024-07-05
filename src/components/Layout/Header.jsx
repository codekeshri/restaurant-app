import "./Header.module.css";
import { Fragment } from "react";
import mealsImage from "../../assets/banner.png";
import classes from "./Header.module.css";
import { Cart } from "../UI/Cart";

export const Header = () => {
  return (
    <Fragment>
      <Cart />
      <header className={classes.header}>
        <h1>SWIGGY</h1>
      </header>
      <div className={classes.img}>
        <img className="two" src={mealsImage} alt="keshri" />
      </div>
    </Fragment>
  );
};
