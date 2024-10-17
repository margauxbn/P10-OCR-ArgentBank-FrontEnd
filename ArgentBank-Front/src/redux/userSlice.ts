import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:3001';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials: { email: string; password: string }) => {
    const response = await axios.post(`${BASE_URL}/api/v1/user/login`, userCredentials);
    const request = await response.data.data;
    localStorage.setItem("user", JSON.stringify(request));
    
    return request.data;
  }
); 


interface UserState {
    user: null | { [key: string]: any }; 
}

const initialState: UserState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ [key: string]: any }>) => { 
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user.user; 

export default userSlice.reducer;
