import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./PlaylistSice";
import likedReducer from "./LikedSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";   ///// to avoid unwanted error bcoz od serializability

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["playlist", "liked"], 
};


const rootReducer = combineReducers({
  playlist: playlistReducer,
  liked: likedReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
