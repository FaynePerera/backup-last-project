import { Card } from 'react-bootstrap';
import { faEnvelopeCircleCheck } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import styles from '@/styles/auth/Auth.module.scss';

export default function EmailVerified({ setStep }) {
  useEffect(() => {
    setTimeout(() => {
      setStep('create_password');
    }, 2000);
  }, []);

  return (
    <Card className={`shadow-none shadow-lg ${styles.card}`}>
      <Card.Body className="p-4 pt-6 p-md-6">
        <div className="fw-semibold mb-5">
          <FontAwesomeIcon
            icon={faEnvelopeCircleCheck}
            size="3x"
            className="text-success"
          />
        </div>
        <h2 className="fw-semibold">Email verified!</h2>
        <p>
          In the next step you will
          <b> create a password </b>
          and we will finalize
          setting up your account.
        </p>
      </Card.Body>
    </Card>
  );
}
