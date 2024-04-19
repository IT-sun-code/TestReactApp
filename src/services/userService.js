import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../redux/userSlice";

export const fetchUsers = async (dispatch) => {
  dispatch(fetchUsersStart());
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = (await response.json()).slice(0, 6);
    dispatch(fetchUsersSuccess(data));
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    dispatch(fetchUsersFailure());
    throw error;
  }
};
