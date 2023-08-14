import { Container, Row, Col } from 'react-bootstrap';
import CardA from '../card/CardA';

export default function CardGroupA({ cardGroupCardsAlias, info }) {
  return (
    <Container className={info.class} fluid>
      <Container>
        <Row className="g-3 g-lg-5 justify-content-center">
          {cardGroupCardsAlias.map((card) => (
            <Col sm={12} md={4} key={card.id} style={{ maxWidth: 368 }} className="pb-4">
              <CardA {...card} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
