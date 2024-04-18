import styles from "./categories.module.css";

import Category from "../category/Category";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <Category isActive={true}>Данные профиля</Category>
      <Category isActive={false}>Рабочее пространство</Category>
      <Category isActive={false}>Приватность</Category>
      <Category isActive={false}>Безопасность</Category>
    </div>
  );
};

export default Categories;
