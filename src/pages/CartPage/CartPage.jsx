import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as cartSelectors from "../../redux/cart/cart-selectors";
import * as cartActions from "../../redux/cart/cart-actions";
import PizzaCartItems from "../../modules/PizzaCartItems";
import Button from "../../shared/components/Button";
import products from "../../products";
import styles from "./cartPage.module.scss";

const CartPage = () => {
  const cartTotalQty = useSelector(cartSelectors.cartTotalQty);
  const cartContent = useSelector(cartSelectors.cartContent);

  const dispatch = useDispatch(cartActions.clearCart());

  const clearCart = () => dispatch(cartActions.clearCart());

  const qtyObj = cartContent.reduce((acc, el) => {
    if (!Object.keys(acc).includes(String(el))) {
      return { ...acc, [el]: 1 };
    } else {
      acc[el] += 1;
      return { ...acc };
    }
  }, {});

  const elements = cartContent
    .filter((id, idx, arr) => idx === arr.lastIndexOf(id))
    .map((id) => {
      const requiredProduct = products.find((product) => product.id === id);
      return { ...requiredProduct, qty: qtyObj[id] };
    });

  const totalPrice = cartContent
    .map((id) => {
      const requiredProduct = products.find((product) => product.id === id);
      return requiredProduct.price;
    })
    .reduce((acc, el) => acc + el, 0);

  return (
    <main>
      <div className="container">
        {cartTotalQty ? (
          <div>
            <PizzaCartItems products={elements} />
            <p className={styles.total}>Total: {totalPrice} UAH</p>
            <Button
              type="button"
              text="Make an order"
              btnStyle={styles.btn}
              onClick={clearCart}
            />
          </div>
        ) : (
          <h1 className={styles.head}>
            Choose pizza{" "}
            <Link className={styles.link} to="/">
              here
            </Link>
          </h1>
        )}
      </div>
    </main>
  );
};

export default CartPage;
