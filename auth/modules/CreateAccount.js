import {
  GetReCaptchaToken,
  LoadReCaptcha
} from '@/components/validation/ReCaptcha';
import shoko from '@/lib/_shoko';
import styles from '@/styles/auth/Auth.module.scss';
import { email } from '@/utils/validate/_pattern';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function CheckEmail({ setStep, setEmail }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    setPending(true);
    const recaptcha = await GetReCaptchaToken();
    shoko
      .post('/auth/create-account', {
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        campaign_id: router.query.campaign,
        recaptcha
      })
      .then(() => {
        setEmail(data.email);
        setStep('confirm_verify_email');
      })
      .catch((err) => {
        if (err.response.status === 422) {
          if (err.response.data.code === 'user_already_exists') {
            setError(1);
          } else {
            setError(2);
          }
        }
        setPending(false);
      });
  };
  return (
    <Card className={`shadow-none shadow-lg ${styles.card}`}>
      <Card.Body className="p-4 pt-6 p-md-6">
        <h2 className="fw-semibold">Create an account</h2>

        <div className="fw-semibold mb-6 small">
          <span>Already have an account? </span>
          <Link href="/signin" className="d-inline-flex">
            Sign in here
          </Link>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="first_name">First Name</Form.Label>
              <Form.Control
                {...register('first_name', {
                  required: true
                })}
                className={errors.first_name && 'is-invalid'}
                maxLength="36"
                autoFocus
              />
              {errors.first_name && (
                <div className="invalid-feedback">Enter first name</div>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="last_name">Last Name</Form.Label>
              <Form.Control
                {...register('last_name', {
                  required: true
                })}
                className={errors.last_name && 'is-invalid'}
                maxLength="36"
              />
              {errors.last_name && (
                <div className="invalid-feedback">Enter last name</div>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                {...register('email', {
                  required: true,
                  pattern: email
                })}
                className={errors.email && 'is-invalid'}
                placeholder="username@email.com"
              />
              {errors.email && (
                <div className="invalid-feedback">
                  Enter a valid email address
                </div>
              )}
              {error === 1 && (
                <div className="invalid-feedback d-block">
                  An account with this email already exists.
                  <br />
                  <span className="text-black">
                    <span>Try again or </span>
                    <Link href="/signin">Sign in here</Link>
                  </span>
                </div>
              )}
              {error === 2 && (
                <div className="invalid-feedback d-block">
                  Something went wrong. Please try again.
                </div>
              )}
            </Form.Group>
          </div>
          <div className="text-end mb-5">
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
          <div className="border-top small pt-3 fw-semibold">
            <span>By continuing, you agree to FFOZ&apos;s </span>
            <Link href="/terms">Terms of Service.</Link>
          </div>
        </Form>
        <LoadReCaptcha />
      </Card.Body>
    </Card>
  );
}
