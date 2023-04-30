import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useBreakpoints from "../../../shared/hooks/useBreakpoints";
import * as cartActions from "../../../redux/cart/cart-actions";
import * as cartSelectors from "../../../redux/cart/cart-selectors";
import Button from "../../../shared/components/Button";
import CartCtrls from "../../CartCtrls";
import styles from "./pizzaItem.module.scss";

const PizzaItem = ({ id, title, description, price, image }) => {
  const [isCtrsHidden, setIsCtrlsHidden] = useState(true);
  const cartContent = useSelector(cartSelectors.cartContent);
  const dispatch = useDispatch();
  const { less768px, bigger768px } = useBreakpoints();

  const productQtyInCart = cartContent.filter(
    (productId) => productId === id
  ).length;

  const toggleCtrls = () => setIsCtrlsHidden((prevState) => !prevState);

  const addToCart = (id) => dispatch(cartActions.addToCart(id));
  const removeFromCart = (id) => dispatch(cartActions.removeFromCart(id));

  useEffect(() => {
    if (!productQtyInCart) {
      setIsCtrlsHidden(true);
    }
  }, [productQtyInCart]);

  return (
    <li className={styles.item}>
      <img
        className={styles.img}
        src={image}
        alt={description}
        width={bigger768px ? 180 : 220}
        height={bigger768px ? 180 : 220}
      />
      <div className={styles.meta}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        {less768px ? <p className={styles.price}>₴ {price}</p> : null}
      </div>
      {bigger768px ? <p className={styles.price}>₴ {price}</p> : null}
      {isCtrsHidden ? (
        <Button
          type="button"
          text="Add to cart"
          onClick={toggleCtrls}
          btnStyle={styles.btn}
        />
      ) : null}
      <CartCtrls
        isHidden={isCtrsHidden}
        onPlusClick={() => addToCart(id)}
        onMinusClick={
          !productQtyInCart ? toggleCtrls : () => removeFromCart(id)
        }
        onOKClick={toggleCtrls}
      />
    </li>
  );
};

export default PizzaItem;
