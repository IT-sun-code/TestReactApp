import styles from "./header.module.css";

import { useNavigate, useLocation } from "react-router-dom";

import logoSign from "/icons/logo-sign.svg";
import heartIcon from "/icons/heart-icon.svg";
import bellIcon from "/icons/bell-icon.svg";
import ava from "/images/ava.jpg";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  function handleClick(path) {
    if (pathname === path) {
      return;
    }
    navigate(path);
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <button className={styles.logo} onClick={() => handleClick("/")}>
            <img src={logoSign} alt="logo" className={styles.logoSign} />
            <div>
              <span className={styles.at}>at-</span>
              <span className={styles.work}>work</span>
            </div>
          </button>
          <div className={styles.menu}>
            <div className={styles.icons}>
              <img
                src={heartIcon}
                alt="heart icon"
                className={styles.heartIcon}
              />
              <img src={bellIcon} alt="bell icon" />
            </div>
            <div className={styles.userInfo}>
              <img src={ava} alt="avatar" className={styles.ava} />
              <div className={styles.name}>Name</div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
