import styles from "./userList.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../../../redux/userSlice";
import Loader from "../loader/Loader";
import Card from "../card/Card";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsersStart());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch(fetchUsersSuccess(data.slice(0, 6))))
      .catch((error) => {
        console.error("Error fetching users:", error);
        dispatch(fetchUsersFailure());
      });
  }, [dispatch]);

  return (
    <div className={styles.userList}>
      {loading ? (
        <Loader />
      ) : (
        users.map((user) => <Card key={user.id} user={user} />)
      )}
    </div>
  );
};

export default UserList;
