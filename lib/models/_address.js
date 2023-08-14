import shoko from '../_shoko';

export const DefaultAddress = async () => {
  const res = await shoko.get('address/default');
  return res;
};
export const Adresses = async () => {
  const { data } = await shoko.get('address/list');
  return data;
};
