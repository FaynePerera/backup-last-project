import styles from '@/styles/auth/Auth.module.scss';
import { faEye, faEyeSlash, faUserCircle } from '@fortawesome/pro-light-svg-icons';
import { faSquareQuestion } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  Button, Card, Col, Form, InputGroup, OverlayTrigger, Row, Spinner, Tooltip
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Authenticate({ setStep, email }) {
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const toolTip = (
    <Tooltip id="overlay-example">
      Enable only if you are using your own device!
    </Tooltip>
  );
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { remember: true } });
  const onSubmit = async (data) => {
    setPending(true);
    const response = await signIn('credentials', {
      redirect: false,
      email,
      password: data.password
    });
    setPending(false);
    if (response.error) {
      setError(response.error);
      return false;
    }
    if (router.query.callBackUrl) {
      router.push(router.query.callBackUrl);
    }
    router.push('/');
    return true;
  };
  return (
    <Card className={`shadow-none shadow-lg ${styles.card}`}>
      <Card.Body className="p-4 pt-6 p-md-6">
        <div className="mb-5">
          <div className="fw-semibold d-flex align-items-center">
            <FontAwesomeIcon icon={faUserCircle} size="3x" />
            <div className="ms-2 text-break">{email}</div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <InputGroup>
                <Form.Control
                  {...register('password', {
                    required: true
                  })}
                  className={errors.password && 'is-invalid'}
                  type={showPassword ? 'text' : 'password'}
                  maxLength="16"
                  autoFocus
                />
                <InputGroup.Text onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                  />
                </InputGroup.Text>
              </InputGroup>
              {errors.password && (
                <div className="invalid-feedback">Enter a valid password</div>
              )}
              {error && <div className="invalid-feedback d-block">{error}</div>}
            </Form.Group>
          </div>
          <Row className="mb-5 g-0">
            <Col xs="auto">
              <Form.Switch>
                <Form.Switch.Input {...register('remember')} />
                <Form.Switch.Label className="small" htmlFor="billingPeriod">
                  Keep me signed in
                  <OverlayTrigger placement="top" overlay={toolTip}>
                    <span className="ms-2 text-gray-500">
                      <FontAwesomeIcon icon={faSquareQuestion} />
                    </span>
                  </OverlayTrigger>
                </Form.Switch.Label>
              </Form.Switch>
            </Col>
            <Col className="text-end">
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
            </Col>
          </Row>
          <Row className="border-top small pt-3 fw-semibold g-0">
            <Col xs={12} md={6} className="pb-2 pb-lg-0">
              <a className="link" onClick={() => setStep('password_reset')}>
                Reset your password
              </a>
            </Col>
            <Col xs={12} md={6}>
              <a className=" link" onClick={() => setStep(null)}>
                Sign into a different account
              </a>
            </Col>
          </Row>
        </form>
      </Card.Body>
    </Card>
  );
}
