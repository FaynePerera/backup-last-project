import { Container, Row, Col } from 'react-bootstrap';
import { MDXRemote } from 'next-mdx-remote';
import deco from '../../../public/logos/custom/heading-deco.svg';
import Image from 'next/image';

export default function InfoBlockB({
  infoBlockHeadingAlias,
  infoBlockTextAlias,
  info
}) {
  return (
    <Container fluid className={`${info.class}`}>
      <Container>
        <Row className="justify-content-center">
          <Col sm={11} md={9} style={{ maxWidth: 858 }}>
            <h1 className="display-5 text-center">{infoBlockHeadingAlias}</h1>
            <div className="my-6 text-center">
              <Image
                src={deco}
                alt="First Fruits of Zion"
                width={165}
                height={14}
              />
            </div>
            <div className="text-body fs-4">
              {infoBlockTextAlias && <MDXRemote {...infoBlockTextAlias.mdx} />}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
