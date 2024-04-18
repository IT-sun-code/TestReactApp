import styles from "./category.module.css";

import Line from "../line/Line";

const Category = ({ children, isActive }) => {
  return isActive ? (
    <div className={styles.category}>
      <button className={styles.active}>{children}</button>
      <Line />
    </div>
  ) : (
    <div className={styles.category}>
      <button className={styles.data}>{children}</button>
      <Line />
    </div>
  );
};

export default Category;
