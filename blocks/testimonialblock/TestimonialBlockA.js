import { Row, Col } from 'react-bootstrap';
import Images from '../../media/Image';

export default function TestimonialBlockA({ testimonialBlocktestimonial }) {
  return (
    <Row className="mx-5 my-0">
      <Col sm={12} md={6} xl={8} className="align-middle">
        <Row>
          <h1 className="display-4 mb-4">
            {testimonialBlocktestimonial.quote}
          </h1>
        </Row>
      </Col>
      <Col sm={12} md={6} xl={4} className="py-0 pb-0">
        <div style={{ position: 'relative', width: '100%', padding: '0px' }}>
          <Images image={testimonialBlocktestimonial.personaPhoto} />
        </div>
      </Col>
      <Col sm={12} md={12}>
        <p>{`${testimonialBlocktestimonial.personName} ${testimonialBlocktestimonial.personRole}`}</p>
      </Col>
    </Row>
  );
}
