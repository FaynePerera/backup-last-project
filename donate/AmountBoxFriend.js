import DisclaimerModal from '@/components/modal/DisclaimerModal';
import { useGlobalState } from '@/lib/context/globalContext';
import { faSquareQuestion } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

export default function AmountBoxFriend() {
  const { isMobile } = useGlobalState();
  const [modalShow, setModalShow] = useState(false);

  return (
    <Row>
      <Col className="text-center mx-4">
        <div className="d-flex justify-content-center">
          <p className="m-0 fs-3">
            {isMobile
              ? 'Monthly Support'
              : 'Monthly Support Amount'}
          </p>
          <FontAwesomeIcon
            icon={faSquareQuestion}
            className="align-self-center m-0 ps-2 text-gray-500"
            onClick={() => setModalShow(true)}
          />
        </div>
        <p className="fs-6 mt-2 text-black align-items-center text-center">
          <span>Enter a custom </span>
          <span className="fst-italic">monthly </span>
          <span>amount or select a support level below.</span>
          <br className="d-none d-sm-block d-md-block" />
          <span> You can choose to be billed</span>
          <span className="fst-italic"> monthly </span>
          <span> or </span>
          <span className="fst-italic"> anually </span>
          <span> before signing up.</span>
        </p>
      </Col>
      <DisclaimerModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        slug="monthly_support"
      />
    </Row>
  );
}
