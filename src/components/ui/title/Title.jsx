import styles from "./title.module.css";

import Line from "../line/Line";

const Title = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{children}</h1>
        <div className={styles.line} />
        <Line />
      </header>
    </>
  );
};

export default Title;
