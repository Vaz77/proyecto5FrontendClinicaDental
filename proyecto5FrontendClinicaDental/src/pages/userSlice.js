import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
    credentials: {
      token: "",
    },
    data: {
      name: "",
      role: "3",
    },
  },
  reducers: {
    login: (state, action) => {
      let { payload } = action;
      (state.credentials = {
        token: payload.token,
      }),
        (state.data = {
          name: payload.name,
          role: payload.role,
        });
    },
    logout: (state) => {
      return {
        ...state,
        credentials: {
          token: "",
        },
        data: {
          name: "",
          role: "",
        },
      };
    },
    register: (state, action) => {
      let { payload } = action;
      (state.credentials = {
        token: payload.token,
      }),
        (state.data = {
          name: payload.name,
          role: payload.role,
        });
    },
  },
});

export const userData = (state) => state.user;
export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;