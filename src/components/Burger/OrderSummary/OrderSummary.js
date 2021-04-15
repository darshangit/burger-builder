import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingrediantSummary = Object.keys(props.ingrediants).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingrediants[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Finger licking burger with the dollowing ingrediants:</p>

      <ul>{ingrediantSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
