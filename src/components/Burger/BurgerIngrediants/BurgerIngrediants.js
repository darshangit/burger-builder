import classes from "./BurgerIngrediants.module.css";
import PropTypes from "prop-types";

const BurgerIngrediants = (props) => {
  let ingrediant = null;

  switch (props.type) {
    case "bread-top":
      ingrediant = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingrediant = <div className={classes.Meat}></div>;
      break;

    case "cheese":
      ingrediant = <div className={classes.Cheese}></div>;
      break;

    case "bacon":
      ingrediant = <div className={classes.Bacon}></div>;
      break;

    case "salad":
      ingrediant = <div className={classes.Salad}></div>;
      break;

    case "bread-bottom":
      ingrediant = <div className={classes.BreadBottom}></div>;
      break;

    default:
      ingrediant = null;
  }
  return ingrediant;
};

BurgerIngrediants.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngrediants;
