import { memo } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import * as cartSelectors from "../../../redux/cart/cart-selectors";
import logo from "../../../assets/svg/logo.svg";
import styles from "./header.module.scss";

const Header = () => {
  const cartTotalQty = useSelector(cartSelectors.cartTotalQty);

  return (
    <header className={styles.header}>
      <Link className={styles.logoWrapper} to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
        <span className={styles.logoText}>PizzaStyle</span>
      </Link>
      <div className={styles.linkWrapper}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
          to="/"
        >
          Pizza
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
          to="/cart"
        >
          Cart
          {cartTotalQty ? (
            <span className={styles.cart}>{cartTotalQty}</span>
          ) : null}
        </NavLink>
      </div>
    </header>
  );
};

export default memo(Header);
