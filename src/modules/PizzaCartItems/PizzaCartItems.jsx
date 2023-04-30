import PizzaCartItem from "./PizzaCartItem";
import styles from "./pizzaCartItems.module.scss";

const PizzaCartItems = ({ products }) => {
  const elements = products
    .sort((product1, product2) => product1.id - product2.id)
    .map(({ id, title, description, price, image, qty }) => (
      <PizzaCartItem
        key={id}
        id={id}
        title={title}
        description={description}
        price={price}
        image={image}
        qty={qty}
      />
    ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default PizzaCartItems;
