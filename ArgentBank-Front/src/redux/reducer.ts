import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  email: string;
  token: string;
  firstName: string;
  lastName: string;
  userName: string;
}

const initialState: UserState = {
  email: "",
  token: "",
  firstName: "",
  lastName: "",
  userName: "",
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
    setUserProfile: (state, action: PayloadAction<{ firstName: string; lastName: string; userName: string }>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;   
      state.userName = action.payload.userName; 
    },
    logout: (state) => {
      state.email = "";
      state.token = "";
    },
  },
});

export const { setEmail, setToken, setUserProfile, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;