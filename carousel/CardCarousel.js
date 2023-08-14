import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/pro-solid-svg-icons';
import styles from '@/styles/card/CardCarousel.module.scss';

export default function CardCarousel({ cardChoice }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    setIndex(0);
  }, [cardChoice]);

  useEffect(() => {
    const prevIcon = document.querySelectorAll(
      '#cardCarousel .carousel-control-prev'
    );
    const nextIcon = document.querySelectorAll(
      '#cardCarousel .carousel-control-next'
    );
    prevIcon[0].classList.add('d-none');
    nextIcon[0].classList.add('opacity-100');
  }, []);

  const nextIcon = (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '1.5rem',
        right: '38%'
      }}
    >
      <FontAwesomeIcon
        size="2x"
        icon={faAngleRight}
        className="justify-content-center align-items-center bg-info rounded-circle"
        style={{
          height: '15px',
          width: '15px',
          padding: '15px'
        }}
      />
    </span>
  );

  return (
    <Carousel
      className="pb-7"
      id="cardCarousel"
      interval={null}
      slide={true}
      activeIndex={index}
      onSelect={handleSelect}
      nextIcon={nextIcon}
      prevIcon={false}
      indicators={true}
      variant="dark"
    >
      {cardChoice.map((card, idx, arr) => {
        const nextCard = idx + 1 < arr.length ? arr[idx + 1] : arr[0];
        return (
          <Carousel.Item
            key={card.cardId}
            className="mb-2"
            style={{
              transition: 'transform 0.65s cubic-bezier(.77,.11,.24,1.1) 0s'
            }}
          >
            <Row className="g-3">
              <Col className={`${styles.main} col-md-11`}>
                <Card className="h-100">
                  <Card.Img
                    style={{ aspectRatio: '2/1' }}
                    variant="top"
                    src={card.image}
                  />
                  <Card.Body className="p-lg-4 p-xl-5">
                    <Card.Title className="fs-4 fw-semibold">
                      {card.title}
                    </Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <Link
                      className="me-2 btn btn-info"
                      variant="primary"
                      href={card.buttonLink}
                    >
                      {card.buttonText}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
