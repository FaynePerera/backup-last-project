import { Row, Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import { resources } from '@/lib/global/_featuredResource';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/pro-solid-svg-icons';
import { useGlobalState } from '@/lib/context/globalContext';

export default function FeaturedResource() {
  const resource = resources[0];
  const { view } = useGlobalState();
  return (
    <Container fluid className="bg-light py-10 py-xl-12">
      <Container>
        <Row className="g-6 justify-content-center align-items-center">
          <Col className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 text-lg-end py-5">
            <Image
              src={resource.image}
              fluid={'true'}
              alt={resource.imageAlt}
              className="rounded-4"
            />
          </Col>
          <Col className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6 pe-xl-11">
            <div className="mb-4">
              <span className="small text-uppercase em-spacing-05 fw-semibold">
                Featured Resource
              </span>
              <h2 className="mt-2">{resource.title}</h2>
              <span>By {resource.author}</span>
            </div>
            <p className="fs-large mb-4">
              {resource.description.substring(0, 351)}
              ...
            </p>
            <Link
              href={resource.buttonLink}
              className="m-auto m-lg-0 me-lg-auto btn btn-dark lift"
            >
              <FontAwesomeIcon className="me-2" icon={faShoppingCart} />
              Order Now
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
