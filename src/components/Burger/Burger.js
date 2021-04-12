import classes from "./Burger.module.css";
import BurgerIngrediants from "./BurgerIngrediants/BurgerIngrediants";

const Burger = (props) => {
  let transformedIngrediants = Object.keys(props.ingrediants)
    .map((igKey) => {
      //basically ...Array(1) gives undefined or ...Array(2) gives undefined, undefined
      return [...Array(props.ingrediants[igKey])].map((_, i) => {
        return <BurgerIngrediants key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngrediants.length === 0) {
    transformedIngrediants = <p>Please start adding ingrediants</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngrediants type="bread-top" />
      {transformedIngrediants}
      <BurgerIngrediants type="bread-bottom" />
    </div>
  );
};

export default Burger;
