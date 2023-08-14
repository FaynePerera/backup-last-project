import {
  getAccessRestriction,
  setAccessRestriction
} from '@/lib/global/_accessRestriction';
import { useEffect, useState } from 'react';
import AccountMessage from './AccountMessage';
import { useSession } from 'next-auth/react';
import style from '@/styles/auth/RestrictAccess.module.scss';

export default function RestrictAccess({ action }) {
  let count = 0;
  const { status } = useSession();
  const [isRestricted, setIsRestricted] = useState(false);
  useEffect(() => {
    if (count === 0 && status === 'unauthenticated') {
      setAccessRestriction('commentaries');
      setIsRestricted(getAccessRestriction('commentaries'));
      count++;
    }
  }, [status]);
  return (
    <div>
      {isRestricted && (
        <div
          className={`position-absolute h-100 w-100 d-flex justify-content-center ${style.container}`}
        >
          <div className={style.card}>
            <AccountMessage {...{ action }} show={isRestricted} />
          </div>
        </div>
      )}
    </div>
  );
}
