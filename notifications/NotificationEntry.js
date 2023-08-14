/* eslint-disable no-param-reassign */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faSparkles, faBagShopping, faAddressCard, faUser } from '@fortawesome/pro-duotone-svg-icons';
import { faCircleCheck } from '@fortawesome/pro-solid-svg-icons';
import styles from '@/styles/notifications/NotificationEntry.module.scss';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import monthDayOnly from '@/utils/_dateLocale';
import shoko from '@/lib/_shoko';

export default function NotificationEntry({
  id,
  data,
  createdAt,
  readAt,
  isFirst,
  isLast,
  refreshNotifications,
  isFetching,
  setIsFetching
}) {
  const isRead = readAt !== null && readAt !== undefined;

  const updateNotification = async () => {
    let updated = false;
    let url;

    if (isRead) {
      url = `notifications/${id}/unread`;
      readAt = undefined;
    } else {
      url = `notifications/${id}`;
      readAt = new Date();
    }

    try {
      setIsFetching(true);
      const response = await shoko.put(url);
      if (response.status === 200) {
        updated = true;
      }
    } catch (err) {
      if (err.response.status === 400 || err.response.status === 500) console.warn(err.message); // TODO: check a log vendor
    }
    setIsFetching(false);
    return updated;
  };

  const redirectWhenClicked = async () => {
    if (readAt) {
      window.open('/notification-info');
      return;
    }

    const updated = await updateNotification();
    if (updated) {
      refreshNotifications(id, readAt);
      window.open('/notification-info');
    }
  };

  const changeReadIsRead = async (event) => {
    event.stopPropagation();
    const updated = await updateNotification();
    if (updated) {
      refreshNotifications(id, readAt);
    }
  };

  let icon = '';
  switch (data.category.toLowerCase()) {
    case 'news':
      icon = faNewspaper;
      break;
    case 'resources':
      icon = faSparkles;
      break;
    case 'store':
      icon = faBagShopping;
      break;
    case 'account':
      icon = faAddressCard;
      break;
    default:
      icon = faUser;
      break;
  }

  return (
    <div
      className={`d-flex border-gray-100 border-bottom border-start border-end px-3 ${styles.notification} ${isLast && 'rounded-bottom'} ${isFirst && 'border-top rounded-top'}`}
      role="button"
      onClick={!isFetching ? redirectWhenClicked : undefined}
      tabIndex="0"
    >
      <FontAwesomeIcon icon={icon} className={`${isRead ? 'text-secondary' : 'text-primary'} common-icon-size-2`} />
      <div className="ms-3 w-100">
        <div className="d-flex align-items-center">
          <p className="m-0 text-black fw-semibold xsmall text-uppercase">{data.category}</p>
          {data.urgent && <span className={`bg-danger rounded-circle ms-2 ${styles.notificationDot}`}>&nbsp;</span>}
          <OverlayTrigger
            placement="left"
            overlay={<Tooltip>{isRead ? 'Mark as unread' : 'Mark as read'}</Tooltip>}
          >
            <FontAwesomeIcon
              role="button"
              icon={faCircleCheck}
              className={`${isRead ? 'text-secondary' : 'text-primary'} ${styles.circleCheck} common-icon-size-1 ms-auto`}
              onClick={!isFetching ? changeReadIsRead : undefined}
            />
          </OverlayTrigger>
        </div>
        <p className={`m-0 text-black fs-6 text-uppercase em-spacing-05 ${styles.notificationTitle}`}>{data.title}</p>
        <p className="m-0 text-black fw-normal small">{data.message}</p>
        <p className="m-0 text-black fw-semibold xsmall">{monthDayOnly(createdAt)}</p>
      </div>
    </div>
  );
}
