import styles from "./editPage.module.css";

import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Line from "./../../ui/line/Line";
import Categories from "../../ui/categories/Categories";
import arrowBack from "/icons/arrow-back-icon.svg";
import UserForm from "../../ui/userForm/UserForm";
import Loader from "../../ui/loader/Loader";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const users = useSelector((state) => state.user.users);
  const currentUser = users.find((user) => user.id === parseInt(id));

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <header className={styles.header}>
        <button className={styles.btn} onClick={goBack}>
          <img src={arrowBack} alt="arrow back" />
        </button>
        <h2 className={styles.back}>Назад</h2>
      </header>
      {!currentUser ? (
        <Loader />
      ) : (
        <>
          <main className={styles.container}>
            <div className={styles.settings}>
              <img
                src={currentUser.avatar}
                alt="avatar"
                className={styles.ava}
              />
              <Categories />
            </div>
            <div className={styles.profileData}>
              <header className={styles.dataHeader}>
                <h1>Данные профиля</h1>
                <Line />
              </header>
              <UserForm userId={id} currentUser={currentUser} />
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default EditPage;
