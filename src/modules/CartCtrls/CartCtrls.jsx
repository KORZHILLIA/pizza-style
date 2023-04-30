import Button from "../../shared/components/Button";
import plus from "../../assets/svg/plus.svg";
import minus from "../../assets/svg/minus.svg";
import checkmark from "../../assets/svg/checkmark.svg";
import styles from "./cartCtrls.module.scss";

const CartCtrls = ({ isHidden, onPlusClick, onMinusClick, onOKClick }) => {
  return (
    <div className={isHidden ? styles.general : styles.generalVisible}>
      <div className={styles.btnWrapper}>
        <Button
          type="button"
          icon={plus}
          btnStyle={styles.btn}
          iconStyle={styles.icon}
          onClick={onPlusClick}
        />
        <Button
          type="button"
          icon={minus}
          btnStyle={styles.btn}
          iconStyle={styles.icon}
          onClick={onMinusClick}
        />
        <Button
          type="button"
          icon={checkmark}
          btnStyle={styles.btn}
          iconStyle={styles.icon}
          onClick={onOKClick}
        />
      </div>
    </div>
  );
};

export default CartCtrls;
