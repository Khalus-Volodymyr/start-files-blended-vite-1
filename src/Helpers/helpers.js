import { formatDistanceToNow, format } from 'date-fns';

export function getDateAgo(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatDate(date) {
  return format(new Date(date), 'MM/dd/yyyy, h:mm a');
}
