import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./Data";

const userSlice = createSlice({
  name: "users",

  initialState: userData,

  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
    },

    updateUser: (state, action) => {
      const { id, uname, uemail, uaddress, uphone } = action.payload;
      const updatingUser = state.find((user) => user.id == id);
      if (updatingUser) {
        updatingUser.uname = uname;
        updatingUser.uemail = uemail;
        updatingUser.uaddress = uaddress;
        updatingUser.uphone = uphone;
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      const updatingUser = state.find((user) => user.id == id);
      if (updatingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { createUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;