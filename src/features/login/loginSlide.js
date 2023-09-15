import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoading: (state) => {
      const isLogin = !state.isLoading;
      // localStorage.setItem("isLogin", JSON.stringify(isLogin));
      state.isLoading = isLogin;
    },
  },
});

export const { setLoading } = loginSlice.actions;
export default loginSlice.reducer;
