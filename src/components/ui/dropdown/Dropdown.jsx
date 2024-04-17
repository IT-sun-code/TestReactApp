import styles from "./dropdown.module.css";

const Dropdown = ({ isActive, handleArchive, handleRemove, handleActive }) => {
  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <div className={styles.content}>
          {isActive ? (
            <>
              <div>Редактировать</div>
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
