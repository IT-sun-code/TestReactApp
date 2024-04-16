import styles from "./mainPage.module.css";
import Title from "../../ui/title/Title";
import UserList from "../../ui/userList/UserList";
function MainPage() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.active}>
          <Title>Активные</Title>
          <UserList />
        </section>
        <section className={styles.archive}>
          <Title>Архив</Title>
        </section>
      </main>
    </>
  );
}

export default MainPage;
