import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './modules/languageSlice';
import common from './modules/common';
import notificationReducer from './modules/notificationSlice';
import { notificationMiddleware } from './middleware/notificationMiddleware';

const store = configureStore({
  reducer: {
    language: languageReducer,
    common: common,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notificationMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
