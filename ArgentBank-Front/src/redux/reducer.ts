import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  token: string;
}

const initialState: UserState = {
  email: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.email = "";
      state.token = "";
    },
  },
});

export const { setEmail, setToken, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;