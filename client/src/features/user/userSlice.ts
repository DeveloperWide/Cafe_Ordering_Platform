import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/user.types";

export interface UserState {
  user: null | User;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    cleanError: (state) => {
      state.error = null;
    },

    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, setLoading, setError, cleanError, logout } =
  userSlice.actions;
export default userSlice.reducer;
