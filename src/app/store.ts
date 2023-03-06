import { configureStore } from '@reduxjs/toolkit';
// REDUCERS
import showReducer from '../features/show/showSlice';

const store = configureStore({
  reducer: { show: showReducer }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
