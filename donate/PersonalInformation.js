import { faAddressCard } from '@fortawesome/pro-duotone-svg-icons';
import { faEdit } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

export default function PersonalInformation({ user, address }) {
  return (
    <Container className="g-0" fluid>
      <Row className="mb-5">
        <Col md={6}>
          <h4>Personal information</h4>
          <div className="xsmall">
            <Link href="/" target="_blank">
              <FontAwesomeIcon icon={faEdit} className="text-black" />
              <span className="xxsmall em-spacing-05 fw-semibold ms-2">
                EDIT YOUR PROFILE
              </span>
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="gx-2 mb-6">
        <Col xs="auto" className="d-flex flex-wrap">
          <FontAwesomeIcon
            icon={faAddressCard}
            className=" text-black mb-3 me-3"
            size="4x"
          />
        </Col>
        <Col xs={12} md="auto">
          <h4>{`${user.firstName} ${user.lastName}`}</h4>

          <dl style={{ lineHeight: 1.9 }}>
            <dt>{user.email}</dt>
            {address && (
              <>
                <dt>{`${address.address1}, ${address.city}, ${address.state}, ${address.post_code} ${address.country}`}</dt>
                <dt>{address.phone1}</dt>
              </>
            )}
          </dl>
        </Col>
      </Row>
    </Container>
  );
}
