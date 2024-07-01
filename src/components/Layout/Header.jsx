import "./Header.module.css";
import { Fragment } from "react";
import mealsImage from "../../assets/banner.png";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>SWIGGY</h1>
        <HeaderCartButton />
      </header>
      <div className={classes.img}>
        <img className="two" src={mealsImage} alt="keshri" />
      </div>
    </Fragment>
  );
};
