import { Card, Button } from 'react-bootstrap';
import { faEnvelope } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import shoko from '@/lib/_shoko';
import styles from '@/styles/auth/Auth.module.scss';

export default function Authenticate({ setStep, email }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const getCode = () => {
    setPending(true);
    shoko
      .post('/auth/get-code', { email })
      .then(() => {
        setStep('verify_email');
      })
      .catch(() => {
        setPending(false);
        setError(true);
      });
  };
  return (
    <Card className={`shadow-none shadow-lg ${styles.card}`}>
      <Card.Body className="p-4 pt-6 p-md-6">
        <div className="fw-semibold mb-5">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </div>
        <h2 className="fw-semibold">Let&apos;s verify your email</h2>
        <p>
          To confirm your identity, we&apos;ll send an email to
          {' '}
          <b>{email}</b>
          {' '}
          to verify your account.
        </p>
        {error && (
          <div className="invalid-feedback d-block">
            Something went wrong. Please try again.
          </div>
        )}

        <div className="mb-5 text-end mt-5">
          <Button
            variant="primary"
            size="sm"
            disabled={pending}
            onClick={getCode}
          >
            Continue
          </Button>
        </div>
        <div className="border-top small pt-3 fw-semibold">
          <a className="link" onClick={() => setStep(null)}>
            Start again with a different email
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}
