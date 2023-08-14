import shoko from '@/lib/_shoko';
import useSWR from 'swr';

const fetcher = (url) => shoko.get(url)
  .then((res) => res.data);

export function useNotifications() {
  const { data: all,
    isLoading: isLoadingAll,
    isValidating: isValidatingAll,
    mutate: mutateAll
  } = useSWR('notifications', fetcher, {
    revalidateOnFocus: false
  });

  return {
    all,
    isLoadingAll,
    isValidatingAll,
    mutateAll
  };
}

export function useUnreadNotifications() {
  const { data: unread,
    isLoading: isLoadingUnread,
    isValidating: isValidatingUnread,
    mutate: mutateUnread
  } = useSWR('notifications?unread=1', fetcher, {
    revalidateOnFocus: false
  });

  return {
    unread,
    isLoadingUnread,
    isValidatingUnread,
    mutateUnread
  };
}
