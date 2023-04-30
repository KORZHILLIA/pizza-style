import PizzaItem from "./PizzaItem";
import styles from "./pizzaItems.module.scss";

const PizzaItems = ({ products }) => {
  const elements = products.map(({ id, title, description, price, image }) => (
    <PizzaItem
      key={id}
      id={id}
      title={title}
      description={description}
      price={price}
      image={image}
    />
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default PizzaItems;
