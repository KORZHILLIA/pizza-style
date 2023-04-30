import PizzaItems from "../../modules/PizzaItems";
import products from "../../products";
import styles from "./pizzaPage.module.scss";

const PizzaPage = () => {
  return (
    <main>
      <div className="container">
        <h1 className={styles.head}>Please order our delicious pizza!</h1>
        <PizzaItems products={products} />
      </div>
    </main>
  );
};

export default PizzaPage;
