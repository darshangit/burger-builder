import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";
const NavigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>

    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
