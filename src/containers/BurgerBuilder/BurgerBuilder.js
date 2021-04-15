import { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
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
    purchasable: false,
    orderNowClicked: false,
  };

  updatePurchaseState(updatedIngrediants) {
    const sum = Object.keys(updatedIngrediants)
      .map((igKey) => {
        return updatedIngrediants[igKey];
      })
      .reduce((currentVal, prevVal) => {
        return currentVal + prevVal;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  }

  addIngrediantHandler = (type) => {
    const updatedCount = this.state.ingrediants[type] + 1;
    const updatedIngrediants = {
      ...this.state.ingrediants,
    };
    updatedIngrediants[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingrediants: updatedIngrediants });
    this.updatePurchaseState(updatedIngrediants);
  };

  removeIngrediantHandler = (type) => {
    const oldCount = this.state.ingrediants[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = this.state.ingrediants[type] - 1;

    const updatedIngrediants = {
      ...this.state.ingrediants,
    };
    updatedIngrediants[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceDeduction;

    this.setState({ totalPrice: newPrice, ingrediants: updatedIngrediants });
    this.updatePurchaseState(updatedIngrediants);
  };

  purchaseHandler = () => {
    this.setState({ orderNowClicked: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ orderNowClicked: false });
  };

  purchaseContinueHandler = () => {
    alert("You Continue");
  };

  render() {
    const disabledInfo = {
      ...this.state.ingrediants,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.orderNowClicked}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            price={this.state.totalPrice}
            ingrediants={this.state.ingrediants}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingrediants={this.state.ingrediants} />
        <BuildControls
          ingrediantAdded={this.addIngrediantHandler}
          ingrediantRemoved={this.removeIngrediantHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
