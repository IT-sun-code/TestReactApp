import styles from "./editPage.module.css";

import { NavLink, useParams } from "react-router-dom";

import Line from "./../../ui/line/Line";
import Categories from "../../ui/categories/Categories";
import arrowBack from "/icons/arrow-back-icon.svg";
import ava from "/images/ava.jpg";
import UserForm from "../../ui/userForm/UserForm";

function EditPage() {
  const { id } = useParams();

  return (
    <>
      <header className={styles.header}>
        <button className={styles.btn}>
          <NavLink to={"/"}>
            <img src={arrowBack} alt="arrow back" />
          </NavLink>
        </button>
        <h2 className={styles.back}>Назад</h2>
      </header>
      <main className={styles.container}>
        <div className={styles.settings}>
          <img src={ava} alt="avatar" className={styles.ava} />
          <Categories />
        </div>
        <div className={styles.profileData}>
          <header className={styles.dataHeader}>
            <h1>Данные профиля</h1>
            <Line />
          </header>
          <UserForm userId={id} />
        </div>
      </main>
    </>
  );
}

export default EditPage;
