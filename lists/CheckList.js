import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/sharp-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

export default function ListGroupA({ items }) {
  let index = 0;

  return (
    <>
      {items.map((item) => (
        <Row className="justify-content-center" key={index++}>
          <Col xs="auto">
            <FontAwesomeIcon icon={faCircleCheck} className="text-primary" size="lg" />
          </Col>
          <Col className="ps-0 text-start">
            <div className="mb-3">{item.text}</div>
          </Col>
        </Row>
      ))}
    </>
  );
}
