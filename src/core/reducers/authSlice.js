import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  token: null,
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { userName, name, token } }) => {
      state.loggedIn = true;
      state.token = token;
      state.user = {
        userName,
        name,
        token,
      };
    },
  },
  extraReducers: (builder) => {},
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth;
