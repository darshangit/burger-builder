import classes from "./Burger.module.css";
import BurgerIngrediants from "./BurgerIngrediants/BurgerIngrediants";

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngrediants type="bread-top" />
      <BurgerIngrediants type="cheese" />
      <BurgerIngrediants type="meat" />
      <BurgerIngrediants type="bread-bottom" />
    </div>
  );
};

export default Burger;
