import styles from "./mainPage.module.css";

import { useSelector } from "react-redux";

import Title from "../../ui/title/Title";
import UserList from "../../ui/userList/UserList";

function MainPage() {
  const { users } = useSelector((state) => state.user);

  const activeUsers = users.filter((user) => user.isActive);
  const archivedUsers = users.filter((user) => !user.isActive);

  return (
    <>
      <main className={styles.main}>
        <section>
          <Title>Активные</Title>
          <UserList users={activeUsers} />
        </section>
        <section>
          <Title>Архив</Title>
          <UserList users={archivedUsers} />
        </section>
      </main>
    </>
  );
}

export default MainPage;
