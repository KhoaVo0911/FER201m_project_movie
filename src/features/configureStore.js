import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "./film/filmSlice";
import loginReducer from "./login/loginSlide";

export const store = configureStore({
  reducer: {
    film: filmReducer,
    login: loginReducer,
  },
});
