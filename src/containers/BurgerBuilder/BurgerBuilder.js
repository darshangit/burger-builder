import { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingrediants: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngrediantHandler = (type) => {
    const updatedCount = this.state.ingrediants[type] + 1;
    const updatedIngrediants = {
      ...this.state.ingrediants,
    };
    updatedIngrediants[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingrediants: updatedIngrediants });
  };

  removeIngrediantHandler = (type) => {};

  render() {
    return (
      <Aux>
        <Burger ingrediants={this.state.ingrediants} />
        <BuildControls ingrediantAdded={this.addIngrediantHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
