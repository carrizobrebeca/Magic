import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './playerSlice';
import teamsReducer from './teamSlice';
import roundsReducer from './roundSlice';
import pointsReducer from './pointSlice';

const store = configureStore({
  reducer: {
    players: playersReducer,
    teams: teamsReducer,
    rounds: roundsReducer,
    points: pointsReducer,
  },
});

export default store;

