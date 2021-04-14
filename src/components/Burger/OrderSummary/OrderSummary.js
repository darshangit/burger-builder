import Aux from "../../../hoc/Aux";

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
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default OrderSummary;
