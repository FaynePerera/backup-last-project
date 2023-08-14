import styles from '@/styles/blocks/HeroA.module.scss';
import { MDXRemote } from 'next-mdx-remote';
import { Col, Container, Row } from 'react-bootstrap';
import CustomButton from '../../buttons/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/pro-solid-svg-icons';
import { useGlobalState } from '@/lib/context/globalContext';

export default function HeroA({
  heroHeadingAlias,
  heroTextAlias,
  heroImageAlias,
  heroImageMobileAlias,
  buttons,
  info
}) {
  const { isMobile } = useGlobalState();
  const imageUrl = isMobile && heroImageMobileAlias ? heroImageMobileAlias.url : heroImageAlias.url;
  return (
    <Container
      fluid
      className={`g-0 position-relative ${info.class} ${styles.heroBackground}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Container className="position-relative">
        <Row>
          <Col className="col-md-10 col-lg-9 col-xl-7 py-5 mx-auto">
            <h1 className="display-4 fw-bold mb-6">{heroHeadingAlias}</h1>
            <div className="fs-4 mb-5">
              <MDXRemote {...heroTextAlias.mdx} />
            </div>

            {buttons.map((button) => (
              <CustomButton key={button.id} {...button} />
            ))}
          </Col>
        </Row>
      </Container>
      {heroImageAlias.caption && (
        <div className="position-absolute small px-4 start-0 w-100" style={{ bottom: 24 }}>
          <FontAwesomeIcon icon={faImage} className="me-3" />
          {heroImageAlias.caption}
        </div>
      )}
    </Container>
  );
}
