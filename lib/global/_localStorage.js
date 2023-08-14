export const saveToLocal = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromLocal = (key) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key));
  }
  return null;
};

export const removeFromLocal = (key) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};
