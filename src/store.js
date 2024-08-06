import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './features/gameData/gamedataSlice.js'
import counterReducer from './features/counter/counterSlice';


export const store = configureStore({
    reducer: {
      gamedata: gameReducer,
      counter: counterReducer,
    },
  });