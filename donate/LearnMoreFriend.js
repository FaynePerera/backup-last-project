import { faCaretRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function LearnMoreFriend() {
  return (
    <Row className="pt-6 d-flex justify-content-center">
      <Col className="px-4 text-center" style={{ maxWidth: 640 }}>
        <p className="fs-5 text-black align-items-center text-center">
          <i>FFOZ Friends</i>
          <span> support the work of First Fruits of Zion and receive </span>
          <span>exclusive benefits as a thank you.</span>
        </p>
        <Link href="/friends-page" target="_blank">
          <button
            type="button"
            className="me-2 mt-2 btn btn-sm btn-outline-richblack"
          >
            Learn More
            <FontAwesomeIcon icon={faCaretRight} className="ms-2" />
          </button>
        </Link>
      </Col>
    </Row>
  );
}
