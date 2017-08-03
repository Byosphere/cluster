import { SEND_NOTIFICATION } from '../Constants';

export function addNotification(message, level) {
  return {
    type: SEND_NOTIFICATION,
    message,
    level
  };
}