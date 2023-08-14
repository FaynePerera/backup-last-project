import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '@/styles/notifications/NotificationEntry.module.scss';
import { useGlobalState } from '@/lib/context/globalContext';

export default function NotificationSkeleton() {
  const { view, isMobile, isDesktop } = useGlobalState();
  let items;

  if (isMobile) items = 4;
  if (view.width >= 768 && view.width < 1200) items = 4;
  if (isDesktop) items = 6;

  return (
    Array(items)
      .fill()
      .map((a, key) => (
        <div
          className={`d-flex border-gray-100 border-bottom border-start border-end px-3 ${styles.notification} ${key === (items - 1) && 'rounded-bottom'} ${key === 0 && 'border-top rounded-top'}`}
          role="button"
          tabIndex="0"
          key={`skeletonNot${key}`}
        >
          <Skeleton className="common-icon-size-2" />
          <div className="ms-3 w-100">
            <div className="d-flex align-items-center">
              <p className="m-0 text-black fw-semibold xsmall text-uppercase"><Skeleton /></p>
              <Skeleton className="common-icon-size-1 ms-auto" />
            </div>
            <p className={`m-0 text-black fs-6 text-uppercase em-spacing-05 ${styles.notificationTitle}`}><Skeleton /></p>
            <p className="m-0 text-black fw-normal small"><Skeleton /></p>
            <p className="m-0 text-black fw-semibold xsmall"><Skeleton /></p>
          </div>
        </div>
      ))
  );
}
