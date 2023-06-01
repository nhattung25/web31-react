import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./player/player.slice";

const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export default store;
