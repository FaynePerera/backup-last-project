import { useSession } from 'next-auth/react';

export default function useCheckSession() {
  const { status } = useSession();
  const isLoggedIn = status === 'authenticated';

  return isLoggedIn;
}
