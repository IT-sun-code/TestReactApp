import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
    },
    fetchUsersSuccess(state, action) {
      state.loading = false;
      state.users = action.payload.map((user) => ({
        ...user,
        isActive: true,
      }));
    },
    fetchUsersFailure(state) {
      state.loading = false;
    },
    toggleCardActive(state, action) {
      const { userId, isActive } = action.payload;
      const userToUpdate = state.users.find((user) => user.id === userId);
      if (userToUpdate) {
        userToUpdate.isActive = isActive;
      }
    },
    removeCard(state, action) {
      const { userId } = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);
    },
    setActive(state, action) {
      const { userId, isActive } = action.payload;
      const userToSetActive = state.users.find((user) => user.id === userId);
      if (userToSetActive) {
        userToSetActive.isActive = isActive;
      }
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  toggleCardActive,
  removeCard,
  setActive,
} = userSlice.actions;

export default userSlice.reducer;
