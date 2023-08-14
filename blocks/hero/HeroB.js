import styles from '@/styles/blocks/HeroA.module.scss';
import { MDXRemote } from 'next-mdx-remote';
import { Col, Container, Row } from 'react-bootstrap';
import CustomButton from '../../buttons/CustomButton';

export default function HeroA({
  heroHeadingAlias,
  heroTextAlias,
  heroImageAlias,
  buttons,
  info
}) {
  return (
    <Container
      fluid
      className={`g-0 ${info.class} ${styles.heroBackground}`}
      style={{ backgroundImage: `url(${heroImageAlias.url})` }}
    >
      <Container>
        <Row>
          <Col className="col-md-8 col-lg-6 col-xl-8 py-5 mx-auto">
            <h1 className="display-4 fw-bold">{heroHeadingAlias}</h1>
            <div className="fs-4 mb-5">
              <MDXRemote {...heroTextAlias.mdx} />
            </div>

            {buttons.map((button) => <CustomButton key={button.id} {...button} />)}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
