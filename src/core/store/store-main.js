import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import auth from "@/core/reducers/authSlice";
import { api } from "@/core/api/auth";

export const createStore = (options) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
  });

export const store = createStore();

export const useAppDispatch = () => useDispatch();

export const useTypedSelector = useSelector;
