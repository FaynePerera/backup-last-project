import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ListGroupA({ listGroupItemsAlias, info, icon }) {
  return (
    <Container className={`${info.class}`}>
      <Row className="justify-content-center">
        <Col md={12} lg={10} xl={9} xxl={8}>
          <Row className="justify-content-center">
            {listGroupItemsAlias.map((item) => (
              <Col sm={11} md={6} key={item.id} className="px-3 px-sm-5 px-md-5 px-lg-6 pb-3">
                <Row className="g-4">
                  {icon && (
                    <Col xs="auto">
                      <FontAwesomeIcon
                        icon={icon.name}
                        className={icon.class}
                      />
                    </Col>
                  )}
                  <Col>
                    <p className="fs-large">{item.heading}</p>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
