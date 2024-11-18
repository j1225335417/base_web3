// notificationMiddleware.ts
import { Middleware } from '@reduxjs/toolkit';
import {
  showNotification,
  clearNotification,
} from '../modules/notificationSlice';

let notification: any = null;

export const notificationMiddleware: Middleware =
  (store) => (next) => async (action) => {
    // 监听 showNotification 动作
    if (showNotification.match(action)) {
      const { type, message, description, duration } = action.payload;

      // 动态加载 antd notification
      if (!notification) {
        const antd = await import('antd');
        notification = antd.notification;
      }

      // 调用 antd 的 notification 方法
      notification[type]({
        message,
        description,
        duration,
      });

      // 可选：清理通知状态
      // store.dispatch(clearNotification());
    }
    if (clearNotification.match(action)) {
      notification.destroy();
    }

    return next(action);
  };
