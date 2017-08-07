import { SEND_NOTIFICATION } from '../Constants';

export function addNotification(message, level, position) {
  return {
    type: SEND_NOTIFICATION,
    message,
    level,
    position: position || 'tc'
  };
}