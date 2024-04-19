import styles from "./dropdown.module.css";

import { useNavigate } from "react-router-dom";

const Dropdown = ({
  isActive,
  handleArchive,
  handleRemove,
  handleActive,
  userId,
}) => {
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/edit/${userId}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <div className={styles.content}>
          {isActive ? (
            <>
              <div onClick={handleEdit}>Редактировать</div>
              <div onClick={handleArchive}>Архивировать</div>
              <div onClick={handleRemove}>Скрыть</div>
            </>
          ) : (
            <div onClick={handleActive} className={styles.archive}>
              Активировать
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
