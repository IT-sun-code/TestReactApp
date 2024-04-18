import styles from "./categories.module.css";

import Category from "../category/Category";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <Category isHeader={true}>Данные профиля</Category>
      <Category isHeader={false}>Рабочее пространство</Category>
      <Category isHeader={false}>Приватность</Category>
      <Category isHeader={false}>Безопасность</Category>
    </div>
  );
};

export default Categories;
