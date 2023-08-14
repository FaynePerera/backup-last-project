import { Container, Row, Col } from 'react-bootstrap';

export default function TextBlock({ title, contents }) {
  if (!title || !contents) return null;
  return (
    <Container>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>{contents}</Col>
      </Row>
    </Container>
  );
}
