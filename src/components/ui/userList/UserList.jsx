import styles from "./userList.module.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../services/userService";

import Loader from "../loader/Loader";
import Card from "../card/Card";

const UserList = ({ users }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUsers(dispatch);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.userList}>
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default UserList;
