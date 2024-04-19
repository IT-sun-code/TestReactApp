import styles from "./button.module.css";

const Button = ({ children, isDisabled }) => {
  return (
    <button className={isDisabled ? styles.btnDisabled : styles.btn}>
      {children}
    </button>
  );
};

export default Button;
