import styles from "./popup.module.css";

import { useEffect } from "react";
import Portal from "../../../utils/Portal";

import cross from "/icons/cross-icon.svg";
import status from "/icons/status-checked-box-icon.svg";

function Popup({ isOpen, onClose }) {
  useEffect(() => {
    let timeoutId = null;
    if (isOpen) {
      timeoutId = setTimeout(() => {
        onClose();
      }, 4000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <Portal>
      <>
        {isOpen && (
          <>
            <div className={styles.container}>
              <button className={styles.box}>
                <img
                  src={cross}
                  alt="close popup"
                  className={styles.close}
                  onClick={onClose}
                />
              </button>
              <img src={status} alt="Valid status" className={styles.status} />
              <h2 className={styles.congrats}>Изменения сохранены!</h2>
            </div>
            <div className={styles.overlay} />
          </>
        )}
      </>
    </Portal>
  );
}

export default Popup;
