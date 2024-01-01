
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthReducer from "./AuthReducer";
import persistStore from "redux-persist/es/persistStore";

let reducer = combineReducers({
  cart: CartReducer,
  auth: AuthReducer,
});

let persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

let persistedReducer = persistReducer(persistConfig, reducer);

 export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

 export const persistor = persistStore(store);

