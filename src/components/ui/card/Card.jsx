import styles from "./card.module.css";

import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  toggleCardActive,
  removeCard,
  setActive,
} from "../../../redux/userSlice";

import truncateString from "../../../utils/truncateString";
import Dropdown from "../dropdown/Dropdown";

const Card = ({ user }) => {
  const dispatch = useDispatch();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { id, username, company, address, isActive, avatar } = user;

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const archiveCard = () => {
    dispatch(toggleCardActive({ userId: id, isActive: false }));
  };

  const removeUser = () => {
    dispatch(removeCard({ userId: id }));
  };

  const toggleActive = () => {
    dispatch(setActive({ userId: id, isActive: !isActive }));
  };

  //   Trimming lines that are too long
  const truncatedUsername = truncateString(username, 12);
  const truncatedCompanyName = truncateString(company.name, 16);
  const truncatedCityName = truncateString(address.city, 18);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.card}>
        <img
          src={avatar}
          alt="avatar"
          className={isActive ? styles.ava : styles.avaArchive}
        />
        <div className={styles.info}>
          <div className={styles.mainInfo}>
            <div className={styles.nameAndMore}>
              <h2
                className={isActive ? styles.name : styles.nameArchive}
                title={username}
              >
                {truncatedUsername}
              </h2>
              <div className={styles.moreContainer} onClick={toggleDropdown}>
                <button className={styles.moreButton} title="More"></button>
                {dropdownVisible && (
                  <div className={styles.dropdownMenu} ref={dropdownRef}>
                    <Dropdown
                      isActive={isActive}
                      handleArchive={archiveCard}
                      handleRemove={removeUser}
                      handleActive={toggleActive}
                      userId={id}
                    />
                  </div>
                )}
              </div>
            </div>
            <div
              className={isActive ? styles.company : styles.companyArchive}
              title={company.name}
            >
              {truncatedCompanyName}
            </div>
          </div>
          <div
            className={isActive ? styles.city : styles.cityArchive}
            title={address.city}
          >
            {truncatedCityName}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
