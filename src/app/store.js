
import { configureStore } from '@reduxjs/toolkit';

import homeReducer from "../Modules/Home/slice";
import loginReducer from "../Modules/Login/slice";

export const store = configureStore({
  reducer: {login: loginReducer,home:homeReducer},
});
