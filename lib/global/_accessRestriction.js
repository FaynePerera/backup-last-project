import { getFromLocal, saveToLocal } from './_localStorage';
import { getCurrentDate } from '@/utils/_date';

const restrictions = [
  { type: 'commentaries', count: 3, value: 'restrictCommentary' }
];

export const getAccessRestriction = (type) => {
  const restriction = restrictions.find((item) => item.type === type);
  if (restriction) {
    const { value } = restriction;
    const local = getFromLocal(value);
    return local?.count > restriction.count;
  }
  return false;
};

export const setAccessRestriction = (type) => {
  const restriction = restrictions.find((item) => item.type === type);
  if (restriction) {
    const { value } = restriction;
    const local = getFromLocal(value);
    const date = getCurrentDate();
    if (!local?.date || local?.date !== date) {
      saveToLocal(value, { date, count: 1 });
    } else {
      saveToLocal(value, { date: local.date, count: local.count + 1 });
    }
  }
};
