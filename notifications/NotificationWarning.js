import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/pro-duotone-svg-icons';

export default function NotificationWarning() {
  return (
    <div className="px-9 pt-4 pb-8 d-flex align-items-center">
      <FontAwesomeIcon icon={faFlag} className="text-info" style={{ width: 64, height: 64, marginRight: 36 }} />
      <p className="fw-normal fs-4 m-0">Notifications are shown for 30 days. Mark a notification as unread to keep it visible.</p>
    </div>
  );
}
