import { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";

class BurgerBuilder extends Component {
  state = {
    ingrediants: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingrediants={this.state.ingrediants}/>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
