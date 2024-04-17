import styles from "./dropdown.module.css";

import { NavLink } from "react-router-dom";

const Dropdown = ({
  isActive,
  handleArchive,
  handleRemove,
  handleActive,
  userId,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <div className={styles.content}>
          {isActive ? (
            <>
              <div>
                <NavLink to={`/edit/${userId}`}>Редактировать</NavLink>
              </div>

              <div onClick={handleArchive}>Архивировать</div>
              <div onClick={handleRemove}>Скрыть</div>
            </>
          ) : (
            <div onClick={handleActive}>Активировать</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
