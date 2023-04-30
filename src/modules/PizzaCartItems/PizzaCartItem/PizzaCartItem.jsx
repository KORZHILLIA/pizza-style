import { useDispatch } from "react-redux";
import * as cartActions from "../../../redux/cart/cart-actions";
import Button from "../../../shared/components/Button";
import plus from "../../../assets/svg/plus.svg";
import minus from "../../../assets/svg/minus.svg";
import styles from "./pizzaCartItem.module.scss";

const PizzaCartItem = ({ id, title, description, price, image, qty }) => {
  const dispatch = useDispatch();

  const addToCart = (id) => dispatch(cartActions.addToCart(id));
  const removeFromCart = (id) => dispatch(cartActions.removeFromCart(id));
  const removeProductFromCart = (id) =>
    dispatch(cartActions.removeProductFromCart(id));

  return (
    <li className={styles.item}>
      <span className={styles.qty}>{qty}</span>
      <img
        className={styles.img}
        src={image}
        alt={description}
        width={200}
        height={200}
      />
      <div className={styles.meta}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>₴ {price * qty}</p>
      </div>
      <div className={styles.btnWrapper}>
        <Button
          type="button"
          text="Remove"
          btnStyle={styles.removeBtn}
          onClick={() => removeProductFromCart(id)}
        />
        <Button
          type="button"
          icon={plus}
          btnStyle={styles.btn}
          iconStyle={styles.icon}
          onClick={() => addToCart(id)}
        />
        <Button
          type="button"
          icon={minus}
          btnStyle={styles.btn}
          iconStyle={styles.icon}
          onClick={() => removeFromCart(id)}
        />
      </div>
    </li>
  );
};

export default PizzaCartItem;
