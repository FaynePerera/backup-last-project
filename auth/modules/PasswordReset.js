import shoko from '@/lib/_shoko';
import styles from '@/styles/auth/Auth.module.scss';
import { faUserCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { email as validateEmail } from '@/utils/validate/_pattern';

export default function PasswordReset({ setStep, email }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { email } });
  const onSubmit = (data) => {
    setPending(true);
    shoko
      .post('/auth/get-code', { email: data.email })
      .then(() => {
        setStep('verify_email');
      })
      .catch(() => {
        setPending(false);
        setError(true);
      });
  };
  return (
    <Card className={`shadow ${styles.card}`}>
      <Card.Body className="p-4 pt-6 p-md-6">
        <div className="fw-semibold d-flex align-items-center mb-4">
          <FontAwesomeIcon icon={faUserCircle} size="3x" />
          <span className="ms-2 text-break">{email}</span>
        </div>
        <h2 className="fw-semibold">Reset your password</h2>
        <p className="mb-5">
          Continue below if you want to change the password used to sign into
          your FFOZ account.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                {...register('email', {
                  required: true,
                  pattern: validateEmail
                })}
                className={errors.email && 'is-invalid'}
                placeholder="username@email.com"
              />
              {errors.email && (
                <div className="invalid-feedback">
                  Enter a valid email address
                </div>
              )}
              {error && (
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
        </form>
        <div className="border-top small pt-3 fw-semibold">
          <a className="link" onClick={() => setStep(null)}>
            Start again with a different email
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}
