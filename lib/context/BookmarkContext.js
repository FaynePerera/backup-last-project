import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import shoko from '@/lib/_shoko';

export const BookmarkContext = React.createContext();

export const useBookmarkState = () => useContext(BookmarkContext);

export default function BookmarkContextProvider({ children }) {
  const [bookmarked, setBookmarked] = useState(false);
  const router = useRouter();
  const { status } = useSession();
  const url = router.asPath;

  useEffect(() => {
    if (url && status === 'authenticated') {
      shoko.post('/bookmarks/exists', { url }).then(({ data }) => {
        setBookmarked(data.exists);
      });
    }
  }, [status]);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarked,
        setBookmarked,
        url
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
