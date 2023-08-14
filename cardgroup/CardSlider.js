import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function CardSlider({ cardChoice }) {
  return (
    <>
      {cardChoice.map((card) => (
        <Col
          key={card.cardId}
          style={{ minWidth: '19rem' }}
          className=" col-lg-4 d-flex pt-4"
        >
          <Card>
            <Card.Img
              style={{ aspectRatio: '3/2' }}
              variant="top"
              src={card.image}
            />

            <Card.Body className="d-flex flex-column ">
              <Card.Title className="fs-4 fw-semibold">{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Link
                className=" mt-auto me-auto btn btn-info"
                href={card.buttonLink}
              >
                {card.buttonText}
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}
