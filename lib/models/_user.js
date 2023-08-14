import shoko from '../_shoko';

const User = async () => {
  const { data: user } = await shoko.get('auth/user');
  return user;
};

export default User;
