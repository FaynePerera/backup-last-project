import {
  GetReCaptchaToken,
  LoadReCaptcha
} from '@/components/validation/ReCaptcha';
import { event } from '@/lib/_gtag';
import shoko from '@/lib/_shoko';
import styles from '@/styles/auth/Auth.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { email } from '@/utils/validate/_pattern';

export default function CheckEmail({ setStep, setEmail }) {
  const [pending, setPending] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    setPending(true);
    const recaptcha = await GetReCaptchaToken();
    shoko
      .post('/auth/check-email', { email: data.email, recaptcha })
      .then(() => {
        event('check_email', 'auth', 'success', 0);
        setEmail(data.email);
        setStep('authenticate');
      })
      .catch((err) => {
        if (err.response.status === 404) {
          if (err.response.data.code === 'user_not_found') {
            setNotFound(true);
            setPending(false);
          }
          if (err.response.data.code === 'email_not_verified') {
            setEmail(data.email);
            setStep('confirm_verify_email');
          }
        } else {
          setPending(false);
        }
      });
  };
  return (
    <Card className={`shadow-none shadow-lg ${styles.card}`}>
      <Card.Body className="p-4 pt-6 p-md-6">
        <h2 className="fw-semibold">Sign in</h2>
        <div className="fw-semibold small mb-5">
          <span> New at First Fruits of Zion? </span>
          <Link href="/getstarted" className="d-inline-flex">
            Get started here
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                {...register('email', {
                  required: true,
                  pattern: email
                })}
                className={errors.email && 'is-invalid'}
                placeholder="username@email.com"
                autoFocus
              />
              {errors.email && (
                <div className="invalid-feedback">
                  Enter a valid email address
                </div>
              )}
              {notFound && (
                <div className="invalid-feedback d-block">
                  An account with this email Does not exist.
                  <br />
                  <span className="text-black">
                    <span>Try again or </span>
                    <Link href="/getstarted">Create a new Account</Link>
                  </span>
                </div>
              )}
            </Form.Group>
          </div>
          <div className="text-end mb-2">
            <Button
              variant="primary"
              size="sm"
              disabled={pending}
              type="submit"
            >
              {pending && (
                <Spinner
                  className="me-2"
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              <span> Continue</span>
            </Button>
          </div>
        </form>
        <LoadReCaptcha />
      </Card.Body>
    </Card>
  );
}
