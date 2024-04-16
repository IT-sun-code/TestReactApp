import styles from "./card.module.css";
import ava from "/images/ava.jpg";
import more from "/icons/more-default-icon.svg";
import truncateString from "../../../utils/truncateString";
function Card({ user }) {
  const { username, company, address } = user;

  //   Trimming lines that are too long
  const truncatedUsername = truncateString(username, 12);
  const truncatedCompanyName = truncateString(company.name, 16);
  const truncatedCityName = truncateString(address.city, 18);

  return (
    <div className={styles.card}>
      <img src={ava} alt="avatar" className={styles.ava} />
      <div className={styles.info}>
        <div className={styles.mainInfo}>
          <div className={styles.nameAndMore}>
            <h2 className={styles.name} title={username}>
              {truncatedUsername}
            </h2>
            <img src={more} alt="more" />
          </div>
          <div className={styles.company} title={company.name}>
            {truncatedCompanyName}
          </div>
        </div>
        <div className={styles.city} title={address.city}>
          {truncatedCityName}
        </div>
      </div>
    </div>
  );
}

export default Card;
