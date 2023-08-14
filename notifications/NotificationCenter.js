/* eslint-disable no-param-reassign */
import Link from 'next/link';
import NotificationEntry from './NotificationEntry';
import { useState } from 'react';
import { useNotifications, useUnreadNotifications } from '@/hooks/useNotifications';
import { useGlobalState } from '@/lib/context/globalContext';
import shoko from '@/lib/_shoko';
import { motion } from 'framer-motion';
import styles from '@/styles/notifications/NotificationCenter.module.scss';
import NotificationWarning from './NotificationWarning';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkLarge } from '@fortawesome/pro-regular-svg-icons';
import { faUserCircle } from '@fortawesome/pro-duotone-svg-icons';
import { useSession } from 'next-auth/react';
import NotificationSkeleton from './NotificationSkeleton';

export default function NotificationCenter({ xValue, onCloseNotifications }) {
  const [isAllSelected, setIsAllSelected] = useState(true);
  const [isUnreadSelected, setIsUnreadSelected] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const { all, isLoadingAll, isValidatingAll, mutateAll } = useNotifications();
  const { unread, isLoadingUnread, isValidatingUnread, mutateUnread } = useUnreadNotifications();
  const { view, isMobile, isDesktop } = useGlobalState();
  const { data: session } = useSession();

  /**
   * Mutates "AllNotifications" array locally
   * @param {string} id
   * @param {string} readAt
   */
  const mutateAllLocally = (id, readAt) => {
    const newData = all.map((a) => {
      if (a.id === id) {
        a.read_at = readAt;
      }
      return a;
    });
    mutateAll([...newData], {
      optimisticData: [...newData],
      rollbackOnError: true,
      populateCache: true,
      revalidate: false
    });
  };

  /**
   * Mutates the "UnRead" notifications array locally
   * @param {string} id
   * @param {string} readAt
   */
  const mutateUnreadLocally = (id, readAt) => {
    const newData = unread.map((a) => {
      if (a.id === id && readAt !== undefined) {
        return undefined;
      }
      return a;
    });
    const filteredNewData = newData.filter((d) => d !== undefined);
    mutateUnread([...filteredNewData], {
      optimisticData: [...filteredNewData],
      rollbackOnError: true,
      populateCache: true,
      revalidate: false
    });
  };

  /**
   * Callback function to dynamically call the local mutations
   * @param {string} id
   * @param {string} readAt
   * @returns void
   */
  const refreshNotifications = (id, readAt) => (isAllSelected ? mutateAllLocally(id, readAt) : mutateUnreadLocally(id, readAt));

  const clickAll = () => {
    setIsAllSelected(true);
    setIsUnreadSelected(false);
    mutateAll();
  };

  const diff = view.width >= 768 && view.width < 992
    ? 10
    : 25;
  const right = xValue
    ? (view.width - diff) - xValue
    : undefined; // dynamically set the right position of the not. center

  const clickUnread = () => {
    setIsAllSelected(false);
    setIsUnreadSelected(true);
    mutateUnread();
  };

  const markAllAsRead = async () => {
    setIsFetching(true);
    try {
      const response = await shoko.post('notifications/mark-all-read');
      if (response.status === 200) {
        if (isAllSelected) mutateAll();
        else mutateUnread();
      }
    } catch (err) {
      if (err.response.status === 400 || err.response.status === 500) console.warn(err.message); // TODO: check a log vendor
    }
    setIsFetching(false);
  };

  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      initial="closed"
      animate="open"
      variants={variants}
      className={`${styles.notifications} rounded-2 bg-white`}
      style={{ right }}
    >
      {
        isMobile && (
          <div className="p-4 d-flex align-items-center border-bottom">
            <p className="fw-semibold fs-5 mb-0">Account & Notifications</p>
            <FontAwesomeIcon
              icon={faXmarkLarge}
              className="common-icon-size-4 ms-auto"
              role="button"
              onClick={onCloseNotifications}
            />
          </div>
        )
      }
      <div className={`d-flex flex-column ${isDesktop ? 'pt-4 px-4 rounded border' : 'px-3 py-4'}`}>
        {
          isDesktop && (
            <div className="py-4 px-0 border-bottom border-light">
              <p className="m-0 fw-semibold fs-2">Notifications</p>
            </div>
          )
        }
        {
          isMobile && (
            <div className="d-flex border-bottom pb-5">
              <FontAwesomeIcon
                icon={faUserCircle}
                className={`common-icon-size-5 me-3 ${styles.userIcon}`}
                scale="3x"
              />
              <div className="d-flex flex-column">
                <p className="fw-bold fs-3 m-0">{`${session?.user?.firstName} ${session?.user?.lastName}`}</p>
                <p className="small mb-1">{session?.user?.email}</p>
                <div className="d-flex align-items-center">
                  <p className="bg-gray-200 fw-semibold xsmall text-uppercase mb-0 px-2 py-1 me-5 rounded-pill">{session?.user?.roles.length > 0 ? session?.user?.roles[0] : 'Free' }</p>
                  <Link
                    href="/account"
                    className="xsmall fw-semibold"
                  >
                    View Account
                  </Link>
                </div>
              </div>
            </div>
          )
        }
        <div className="mt-3">
          <div className="d-flex pb-3">
            <Link
              href="#"
              className={`${isAllSelected ? 'fw-bold' : 'fw-semibold'} xsmall em-spacing-05 text-black me-5`}
              onClick={clickAll}
            >
              ALL
            </Link>
            <Link
              href="#"
              className={`${isUnreadSelected ? 'fw-bold' : 'fw-semibold'} xsmall em-spacing-05 text-black`}
              onClick={clickUnread}
            >
              UNREAD
            </Link>
            <Link href="#" className="fw-semibold xsmall em-spacing-05 text-black ms-auto" onClick={markAllAsRead}>MARK ALL AS READ</Link>
          </div>
          {
            (isLoadingAll || isLoadingUnread || isValidatingAll || isValidatingUnread) && <NotificationSkeleton />
          }
          {
            !isLoadingAll && !isLoadingUnread && !isValidatingAll && !isValidatingUnread && (
              <div className={`overflow-auto ${styles.notificationList}`}>
                {
                isAllSelected && all && all.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                  .map((notification, index) => (
                    <NotificationEntry
                      {...notification}
                      createdAt={notification.created_at}
                      readAt={notification.read_at}
                      key={notification.id}
                      isLast={all.length - 1 === index}
                      isFirst={index === 0}
                      refreshNotifications={refreshNotifications}
                      isFetching={isFetching}
                      setIsFetching={setIsFetching}
                    />
                  ))
                }
                {
                isUnreadSelected && unread && unread.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                  .map((notification, index) => (
                    <NotificationEntry
                      {...notification}
                      createdAt={notification.created_at}
                      readAt={notification.read_at}
                      key={notification.id}
                      isLast={unread.length - 1 === index}
                      isFirst={index === 0}
                      refreshNotifications={refreshNotifications}
                      isFetching={isFetching}
                      setIsFetching={setIsFetching}
                    />
                  ))
                }
                <NotificationWarning />
              </div>
            )
          }
        </div>
      </div>
    </motion.div>
  );
}
