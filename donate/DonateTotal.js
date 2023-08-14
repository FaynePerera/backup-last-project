import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { usdClean } from '@/utils/_convert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/pro-regular-svg-icons';
import TotalError from './TotalMessage';

export default function DonateTotal({ total, pending }) {
  return (
    <Container className="g-0 text-center border rounded-2 pt-7 pb-4 mb-10">
      <Row>
        <Col>
          <h3 className="mb-1 fw-bold">{usdClean.format(total)}</h3>
        </Col>
      </Row>
      <Row className="mb-6">
        <Col className="small">
          <div className="mb-2">Total Amount in USD</div>
          <TotalError total={total} />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Button
            variant="primary"
            size="lg"
            type="submit"
            disabled={(total < 4 || total > 100000) || pending}
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
            SEND DONATION
          </Button>
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
