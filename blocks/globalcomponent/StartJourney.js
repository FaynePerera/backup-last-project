import Link from 'next/link';
import Images from '@/components/media/Image';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalState } from '@/lib/context/globalContext';
import hubImages from '@/lib/global/_startJourney';
import styles from '@/styles/blocks/StartJourney.module.scss';

import {
  faSidebar,
  faFolderTree,
  faBookCopy
} from '@fortawesome/pro-duotone-svg-icons';

export default function StartJourney({ info }) {
  const [index, setIndex] = useState(0);
  const { view } = useGlobalState();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const prevIcon = document.querySelectorAll(
      '#startJourney .carousel-control-prev'
    );
    const nextIcon = document.querySelectorAll(
      '#startJourney .carousel-control-next'
    );

    prevIcon[0].classList.add('d-none');
    nextIcon[0].classList.add('d-none');
  }, []);

  return (
    <Container fluid className={info.class} style={{ overflow: 'clip' }}>
      <Container className="py-lg-5 py-xl-10">
        <div className="position-relative pt-12 pt-lg-9 pt-xl-10 pt-xxl-12 d-none d-xl-block">
          <div className="shape shape-blur-1a text-light ps-xl-10 ps-xxl-7 me-xl-n10">
            <svg
              viewBox="0 0 723 569"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M703.969 241.602l-.006-.003C716.081 262.97 723 287.677 723 314c0 68.917-47.425 126.757-111.42 142.665L246.7 556.937C226.465 564.729 204.481 569 181.5 569 81.26 569 0 487.74 0 387.5c0-34.256 9.49-66.296 25.985-93.633l-.016.008L141.512 77.548C162.753 33.305 207.123 2.273 258.951.12l.008-.12h251.04l.003.01c41.848.557 78.081 24.378 96.356 59.12l.001-.005 97.61 182.477z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <Row className="justify-content-center align-items-center">
          {view.width < 1200 && (
            <div className="col-12 col-sm-10">
              <h1 className="text-center mt-7 mb-2 fw-light display-5">
                Start Your Journey
              </h1>
              <p className="fs-5 mb-5 text-center">
                Sign up for a free account and unlock your personal dashboards.
              </p>
            </div>
          )}
          <Col className="col-12 col-sm-10 col-md-8 col-lg-9 col-xl-7 order-md-1">
            <Carousel
              id="startJourney"
              interval={null}
              variant="dark"
              slide
              touch
              activeIndex={index}
              onSelect={handleSelect}
            >
              {hubImages.map((item) => (
                <Carousel.Item key={item.imgId} className="pb-10">
                  <Images
                    className="d-block w-100 "
                    image={item.image}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col className="col-12 col-xl-5 my-auto order-md-2 ps-xl-5 ps-xxl-6">
            {view.width >= 1200 && (
              <>
                <h1 className="display-5 pb-2 fw-light">Start Your Journey</h1>
                <p className="fs-4 pb-4 me-xl-12 me-xxl-16">
                  Sign up for a free account and unlock your personal
                  dashboards.
                </p>
              </>
            )}
            <Row className="justify-content-center">
              <Col className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-12">
                <div className="pt-4 pt-xl-0 d-flex flex-column">
                  <ul className="ms-xl-n4 ps-0">
                    <div
                      onClick={() => handleSelect(0)}
                      className={`${styles.container} ${
                        index === 0 && styles.active
                      } d-flex my-1`}
                      style={{ cursor: 'pointer' }}
                    >
                      <FontAwesomeIcon
                        icon={faSidebar}
                        fontSize="2.5em"
                        width="100px"
                        swapOpacity
                        color="#e6ae23"
                        style={{ '--fa-primary-color': '#46494E' }}
                      />
                      <p style={{ width: '22rem' }}>
                        Access FFOZ teaching in one curated dashboard
                        experience.
                      </p>
                    </div>
                    <div
                      onClick={() => handleSelect(1)}
                      className={`${styles.container} ${
                        index === 1 && styles.active
                      } d-flex my-1`}
                      style={{ cursor: 'pointer' }}
                    >
                      <FontAwesomeIcon
                        icon={faBookCopy}
                        fontSize="2.5em"
                        width="100px"
                        color="#e6ae23"
                        style={{ '--fa-secondary-color': '#46494E' }}
                      />
                      <p style={{ width: '22rem' }}>
                        Free eBook download of
                        <em> Rabbi Teach Us To Pray </em>
                        by Aaron Eby.
                      </p>
                    </div>
                    <div
                      onClick={() => handleSelect(2)}
                      className={`${styles.container} ${
                        index === 2 && styles.active
                      } d-flex my-1`}
                      style={{ cursor: 'pointer' }}
                    >
                      <FontAwesomeIcon
                        icon={faFolderTree}
                        fontSize="2.5em"
                        width="100px"
                        color="#e6ae23"
                        style={{ '--fa-secondary-color': '#46494E' }}
                      />
                      <p style={{ width: '22rem' }}>
                        Build your personal library by bookmarking resources
                        across all sites.
                      </p>
                    </div>
                  </ul>

                  <Link
                    className="me-xl-auto m-xl-0 m-auto mb-5  btn btn btn-primary d-inline-block"
                    href="/"
                  >
                    Get Started
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
