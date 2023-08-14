import { Container, Row, Col } from 'react-bootstrap';
import { MDXRemote } from 'next-mdx-remote';

export default function InfoBlockA({
  infoBlockHeadingAlias,
  infoBlockTextAlias,
  info
}) {
  return (
    <Container className={info.class} fluid>
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={11} xl={10} xxl={8}>
            <h1 className="display-5 text-center mb-4 mx-xxl-5">
              {infoBlockHeadingAlias}
            </h1>
            {infoBlockTextAlias && <MDXRemote {...infoBlockTextAlias.mdx} />}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
