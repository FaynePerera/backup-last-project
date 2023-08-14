import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Pin from '@/components/input/Pin';
import { faEnvelopeOpen } from '@fortawesome/pro-light-svg-icons';
import {
  faSpinnerThird,
  faCircleCheck,
  faCircleQuestion
} from '@fortawesome/pro-solid-svg-icons';
import { faTimer, faCircle } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Countdown, { zeroPad } from 'react-countdown';
import Link from 'next/link';
import shoko from '@/lib/_shoko';
import styles from '@/styles/auth/Auth.module.scss';

export default function VerifyEmail({ setStep, setCode, email }) {
  const messages = [
    {
      message: `Check your email at <b>${email}</b> and enter the 6-digit code below.`,
      alert: false
    },
    {
      message: 'Your verification code has expired. Please request a new code.',
      alert: true
    },
    {
      message:
        'The code you entered is not correct or has expired. Please try again or request a new code.',
      alert: true
    },
    {
      message:
        'Something went wrong sending the verification code. Please try again.',
      alert: true
    }
  ];
  const [message, setMessage] = useState(messages[0]);
  const [pending, setPending] = useState(false);
  const [sendCode, setSendCode] = useState(false);
  const [timer, setTimer] = useState(Date.now() + 600000);
  const [clearValues, setClearValues] = useState(0);
  const handleComplete = (value) => {
    setPending(true);
    shoko
      .post('/auth/verify-email', { email, code: value })
      .then(() => {
        setCode(value);
        setStep('email_verified');
      })
      .catch((err) => {
        setPending(false);
        if (err.response.status === 404) {
          setMessage(messages[2]);
        } else {
          setMessage(messages[3]);
        }
      });
  };
  const getCode = () => {
    shoko
      .post('/auth/get-code', { email })
      .then(() => {
        setSendCode(true);
        setTimer(Date.now() + 600000);
        setClearValues(clearValues + 1);
      })
      .catch(() => {
        setMessage(messages[3]);
      });
  };
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <span>00:00</span>;
    }
    return (
      <span>
        {zeroPad(minutes)}
        :
        {zeroPad(seconds)}
      </span>
    );
  };
  return (
    <Card className={`shadow ${styles.card}`}>
      <Card.Body className="p-4 pt-6 p-md-6">
        <div className="fw-semibold d-flex align-items-baseline mb-4">
          <span>
            {pending ? (
              <span
                className="fa-layers fa-fw "
                style={{ width: '48px', height: '48px' }}
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  size="3x"
                  className="text-gray-500"
                />
                <FontAwesomeIcon
                  icon={faSpinnerThird}
                  size="3x"
                  spin
                  style={{ animationDuration: '.8s' }}
                />
              </span>
            ) : (
              <FontAwesomeIcon icon={faEnvelopeOpen} size="3x" />
            )}
          </span>
          <span className="ms-3">
            <FontAwesomeIcon icon={faTimer} className="me-2" />
            <Countdown
              date={timer}
              renderer={renderer}
              zeroPadTime={2}
              onComplete={() => setMessage(messages[1])}
            />
          </span>
        </div>
        <h2 className="fw-semibold">
          {pending ? 'Checking...' : 'Verify your email'}
        </h2>
        <div className="pb-6">
          <div className={message?.alert ? 'text-danger' : ''}>
            <span dangerouslySetInnerHTML={{ __html: message?.message }} />
          </div>
        </div>
        <div className="pb-5">
          <Pin
            onCompleted={handleComplete}
            alert={message?.alert}
            clearValues={clearValues}
          />
        </div>
        <div className="pb-4 small">
          {sendCode ? (
            <div className="fw-semibold">
              <div>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-success me-2"
                />
                New code sent. Check your email again!
              </div>
              <div>
                <FontAwesomeIcon icon={faCircleQuestion} className="me-2" />
                <span>Can&apos;t find the email? </span>
                <Link href="/">Get help</Link>
              </div>
            </div>
          ) : (
            <a className="link fw-semibold" onClick={getCode}>
              Resend the code
            </a>
          )}
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
