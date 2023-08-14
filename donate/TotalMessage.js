import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TotalMessage({ isFriend = false, total }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!show && total > 0) {
      setTimeout(() => {
        setShow(true);
      }, 5000);
    }
  }, [total]);

  const getFriendLevel = () => {
    let message = '';
    if (total >= 25 && total < 50) {
      message = 'companion';
    } else if (total >= 50 && total < 100) {
      message = 'ally';
    } else if (total >= 100) {
      message = 'pillar';
    }
    return message;
  };
  return (
    <div className="d-flex justify-content-center" style={{ minHeight: 36 }}>
      {!isFriend ? (
        <div>
          {total > 0 && total < 4 && show && (
            <div className="invalid-feedback d-block">
              Minimum amount is $4. Use numbers only.
            </div>
          )}
        </div>
      ) : (
        <div>
          {total > 0 && total < 25 && show && (
            <div className="invalid-feedback d-block text-center">
              Minimum amount to become an
              <br />
              FFOZ Friend is $25/month.
            </div>
          )}
          {total >= 25 && total <= 10000 && (
            <div className="fw-semibold xsmall text-uppercase">
              {`You will sign up at the ${getFriendLevel()} level`}
            </div>
          )}
        </div>
      )}
      {total > 10000 && (
        <div>
          <div className="invalid-feedback d-block mb-2">
            Maximum amount online is $10,000. Use numbers only.
          </div>
          <div className="xxsmall text-center">
            <Link href="/contact">CONTACT CUSTOMER CARE</Link>
          </div>
        </div>
      )}
    </div>
  );
}
