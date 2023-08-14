import { Container, Row, Col, Card } from 'react-bootstrap';
import { MDXRemote } from 'next-mdx-remote';
import styles from '@/styles/blocks/CardGroupC.module.scss';

const bodyStyles = {
  paddingLeft: 64,
  paddingRight: 64,
  paddingBottom: 64,
  paddingTop: 70
};

export default function CardGroupC({ cardGroupCardsAlias }) {
  return (
    <Container>
      <Row className="justify-content-center">
        {cardGroupCardsAlias.map((item, id) => (
          <Col sm={12} md={6} xl={4} key={item.id} style={{ paddingBottom: 68 }}>
            <a href={item.url} className={`${item.class} ${styles.link}`}>
              <Card id={`list-group-${id}`}>
                <Card.Img variant="top" src={item.image.url} />
                <Card.Body style={bodyStyles}>
                  <Card.Title>{item.heading}</Card.Title>
                  <MDXRemote {...item.text.mdx} />
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
