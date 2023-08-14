import styles from '@/styles/blocks/TestimonialGroupA.module.scss';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/pro-thin-svg-icons';
import { useGlobalState } from '@/lib/context/globalContext';

export default function TestimonialGroupA({
  TestimonialGroupTestimonialsAlias,
  info
}) {
  const [index, setIndex] = useState(0);
  const { view } = useGlobalState();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const prevIcon = document.querySelectorAll(
      '#testimonial .carousel-control-prev'
    );
    const nextIcon = document.querySelectorAll(
      '#testimonial .carousel-control-next'
    );

    prevIcon[0].classList.add('d-none');
    nextIcon[0].classList.add('opacity-100');

    if (view.width <= 991) {
      nextIcon[0].classList.add('d-none');
    } else {
      nextIcon[0].classList.remove('d-none');
    }
  }, [view.width]);

  const icon = (
    <span aria-hidden="true">
      <FontAwesomeIcon size="4x" icon={faAngleRight} color="#2B2E33" />
    </span>
  );
  return (
    <Container fluid className={info.class}>
      <Container className="g-0">
        <Carousel
          interval={null}
          variant="dark"
          slide="true"
          touch
          prevIcon={false}
          activeIndex={index}
          onSelect={handleSelect}
          id="testimonial"
          nextIcon={icon}
        >
          {TestimonialGroupTestimonialsAlias.map((item) => (
            <Carousel.Item
              key={item.id}
              className={`mt-12 mt-md-10 mt-lg-8 ${styles.testimonialItem}`}
            >
              <Carousel.Caption className={`justify-content-center align-items-center d-flex flex-column ${styles.textSmall}`}>
                <Image
                  width={258}
                  height={258}
                  style={{
                    borderRadius: '50%'
                  }}
                  src={item.personaPhoto.url}
                  alt="First testimonial"
                />

                <p
                  style={{ maxWidth: '800px' }}
                  className="fs-4 text-body my-5"
                >
                  <em>{item.quote}</em>
                </p>
                <h4 className="pb-2 fw-semibold">{item.personName}</h4>
                <div>{item.personRole}</div>
                <div className="mb-5 small" style={{ minHeight: 22 }}>
                  {item.location}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Container>
  );
}
