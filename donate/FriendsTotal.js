import { Container, Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import { usdClean } from '@/utils/_convert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/pro-regular-svg-icons';
import TotalError from '@/components/donate/TotalMessage';

export default function DonateTotal({
  total,
  billingPeriod,
  setBillingPeriod,
  pending
}) {
  const viewTotal = billingPeriod === 1 ? total : total * 12;
  const isFriend = true;
  return (
    <Container className="g-0 text-center border pt-8 pb-5 mb-10 rounded-2">
      <Row>
        <Col>
          <h3 className="mb-1 fw-bold">{usdClean.format(viewTotal)}</h3>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="small">
          <div>Total Amount in USD</div>
          <TotalError isFriend={isFriend} total={total} />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="small">
          <span>Your card will be charged </span>
          <b>{billingPeriod === 1 ? 'monthly' : 'annually'}</b>
        </Col>
      </Row>
      <Row className="mb-4 d-flex justify-content-center">
        <Col xs="auto">
          <Form.Switch>
            <Form.Switch.Input
              name="billingPeriod"
              id="billingPeriod"
              defaultValue="1"
              onChange={() => setBillingPeriod(billingPeriod === 1 ? 2 : 1)}
            />
            <Form.Switch.Label className="small" htmlFor="billingPeriod">
              I would like to be billed annually
            </Form.Switch.Label>
          </Form.Switch>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="small d-flex justify-content-center px-9">
          <div style={{ width: '370px' }}>
            Your
            <i> FFOZ Friends </i>
            donation will be processed today.
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <div className="border-top pt-5">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={(total < 25 || total > 10000) || pending}
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
              SIGN UP NOW
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-2 text-gray-500">
        <Col>
          <FontAwesomeIcon icon={faUserShield} size="xl" />
        </Col>
      </Row>
      <Row className="mb-1 ">
        <Col className="small d-flex justify-content-center">
          <div style={{ width: '335px' }}>
            <i>
              Card details and other sensitive information will be encrypted and
              transmitted securely.
            </i>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
