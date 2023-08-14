import { Container, Row, Col } from 'react-bootstrap';
import { MDXRemote } from 'next-mdx-remote';
import Video from '../../media/Video';

export default function VideoBlockA({
  videoBlockTextAlias,
  videoBlockVideoAlias
}) {
  return (
    <Container className="px-6 py-5">
      <Row>
        <Col sm={12} md={6}>
          <MDXRemote {...videoBlockTextAlias.mdx} />
        </Col>
        <Col sm={12} md={6}>
          <Video {...videoBlockVideoAlias} />
        </Col>
      </Row>
    </Container>
  );
}
