import styles from "./category.module.css";

const Category = ({ children, isHeader }) => {
  return isHeader ? (
    <div className={styles.category}>
      <button className={styles.header}>{children}</button>
      <div className={styles.line} />
    </div>
  ) : (
    <div className={styles.category}>
      <button className={styles.data}>{children}</button>
      <div className={styles.line} />
    </div>
  );
};

export default Category;
