import { Row, Col } from 'react-bootstrap';

export default function PaymentDisclaimer() {
  return (
    <Row className="mb-8">
      <Col>
        <div className="d-flex flex-column justify-content-center">
          <div className=" text-black alert alert-primary">
            This will be your primary payment method for
            {' '}
            <i>FFOZ Friends</i>
            {' '}
            contributions.
          </div>
        </div>
      </Col>
    </Row>
  );
}
