import burgerLogo from "../../assets/images/burger-logo.png";
import styles from "./Logo.module.css";

const Logo = (props) => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default Logo;
