import { Container, Row, Col } from 'react-bootstrap';
import CustomButton from '../../buttons/CustomButton';
import { MDXRemote } from 'next-mdx-remote';
import Images from '@/components/media/Image';

export default function InfoMediaBlockA({
  infoMediaBlockHeadingAlias,
  infoMediaBlockTextAlias,
  infoMediaBlockLabelAlias,
  buttons,
  image,
  info
}) {
  return (
    <Container className={info.class} fluid>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={11} lg={6} xl={6} className="order-lg-2 text-end">
            <Images image={image[0]} />
          </Col>
          <Col md={11} lg={6} xl={5} xxl={4}>
            {infoMediaBlockLabelAlias && (
              <div className="small text-uppercase em-spacing-05 fw-semibold mb-2">
                {infoMediaBlockLabelAlias}
              </div>
            )}
            <h1 className="display-6 mb-4">{infoMediaBlockHeadingAlias}</h1>
            <div className="large mb-5">
              {infoMediaBlockTextAlias && (
                <MDXRemote {...infoMediaBlockTextAlias.mdx} />
              )}
            </div>
            {buttons.map((button) => (
              <CustomButton
                btpClass={button.class}
                key={button.id}
                {...button}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
