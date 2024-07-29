import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './features/gameData/gamedataSlice.js'

export const store = configureStore({
    reducer: {
      gamedata: gameReducer,
    },
  });