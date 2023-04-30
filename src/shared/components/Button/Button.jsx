import styles from "./button.module.scss";

const Button = ({ type, text, icon, onClick, btnStyle, iconStyle }) => {
  return (
    <button className={btnStyle} type={type} onClick={onClick}>
      {text ? text : null}
      {icon ? <img className={iconStyle} src={icon} alt={icon} /> : null}
    </button>
  );
};

export default Button;
