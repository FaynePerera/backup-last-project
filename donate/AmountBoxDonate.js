import { faSquareQuestion } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DisclaimerModal from '@/components/modal/DisclaimerModal';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function AmountBoxDonate() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Row>
      <Col className="text-center">
        <div className="d-flex justify-content-center">
          <p className="m-0 fs-3">Donation Amount</p>
          <FontAwesomeIcon
            icon={faSquareQuestion}
            className="align-self-center ps-2 text-gray-500"
            onClick={() => setModalShow(true)}
          />
        </div>
      </Col>
      <DisclaimerModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        slug="donate"
      />
    </Row>
  );
}
