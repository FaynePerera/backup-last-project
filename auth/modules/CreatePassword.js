import shoko from '@/lib/_shoko';
import styles from '@/styles/auth/Auth.module.scss';
import { password } from '@/utils/validate/_pattern';
import { faEye, faEyeSlash, faLock } from '@fortawesome/pro-light-svg-icons';
import {
  faCircleCheck,
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  Button,
  Card,
  Form,
  InputGroup,
  Spinner
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Authenticate({ code, email }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const watchPassword = watch('password', '');
  const requirements = [
    { name: 'Contains at least 8 characters', regex: /.{8,}/ },
    {
      name: 'Contains letters',
      regex: /(?=.*[a-zA-Z])/
    },
    {
      name: 'Contains a number and symbol',
      regex: /(?=.*\d)(?=.*[^\w])/
    },
    {
      name: 'Does not contain your email',
      regex: new RegExp(`^(?=.+)((?!${email}).)*$`)
    },
    { name: 'Avoid dictionary words', regex: /.+/ }
  ];
  const onSubmit = async (data) => {
    setPending(true);
    shoko
      .post('/auth/create-password', { email, password: data.password, code })
      .then(async () => {
        const response = await signIn('credentials', {
          redirect: false,
          email,
          password: data.password
        });
        setPending(false);
        if (response.error) {
          setError('Could not login. Please try again');
          return false;
        }
        if (router.query.callBackUrl) {
          router.push(router.query.callBackUrl);
        }
        router.push('/');
        return true;
      })
      .catch((err) => {
        setPending(false);
        if (err.response.status === 422) {
          setError('Incorrect password, please try again');
        } else setError('Something went wrong. Please try again');
      });
  };
  return (
    <Card className={`shadow-none shadow-lg ${styles.card}`}>
      <Card.Body className="p-4 pt-6 p-md-6">
        <div className="fw-semibold mb-5">
          <FontAwesomeIcon icon={faLock} size="3x" />
        </div>
        <h2 className="fw-semibold">Create a password</h2>
        <div className="mb-5 small">
          Enter a new password for your account.
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <InputGroup>
                <Form.Control
                  {...register('password', {
                    required: true,
                    pattern: password,
                    validate: (value) => value.includes(email) === false
                  })}
                  className={errors.password && 'is-invalid'}
                  type={showPassword ? 'text' : 'password'}
                  maxLength="18"
                  autoFocus
                />
                <InputGroup.Text
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer', minWidth: '3.5em' }}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </InputGroup.Text>
              </InputGroup>
              {errors.password && (
                <div className="invalid-feedback d-block">
                  This password does not meet the requirements
                </div>
              )}
              {error && <div className="invalid-feedback d-block">{error}</div>}
            </Form.Group>
            <div className="small mt-2">
              <div className="mb-2 text-uppercase fs-xxs fw-semibold em-spacing-05">
                Password Requirements:
              </div>
              <div>
                {requirements.map((requirement, index) => (
                  <div
                    key={`passwrod_requirements_${index}`}
                    className={
                      requirement.regex.test(watchPassword)
                        ? 'text-success'
                        : 'opacity-50'
                    }
                  >
                    <span className="me-2">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span className="text-black">{requirement.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-end">
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
              <span> Create Password</span>
            </Button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
}
