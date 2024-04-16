import styles from "./title.module.css";

function Title({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{children}</h1>
        <div className={styles.line} />
      </header>
    </>
  );
}

export default Title;
