// notificationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface NotificationState {
  type: NotificationType;
  message: string;
  description: string;
  duration?: number;
}

const initialState: NotificationState = {
  type: 'info',
  message: '',
  description: '',
  duration: 3,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<NotificationState>) => {
      return action.payload;
    },
    clearNotification: () => {
      return initialState;
    },
  },
});

export const { showNotification, clearNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
