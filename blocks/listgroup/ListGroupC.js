import { Container, Row, Col, Card } from 'react-bootstrap';
import { faCircleArrowRight } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/blocks/ListGroupC.module.scss';

// Styling for the component
const iconConfig = {
  width: 26.67,
  height: 26.67,
  icon: faCircleArrowRight,
  color: '#0b9dd1'
};
const bodyStyles = {
  paddingLeft: 66,
  paddingRight: 66,
  paddingBottom: 55,
  paddingTop: 55
};
const cardStyles = { boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' };

export default function ListGroupC({ listGroupItemsAlias }) {
  return (
    <Container>
      <Row className={`justify-content-center ${styles.link}`}>
        {listGroupItemsAlias.map((item, id) => (
          <Col sm={12} md={6} key={item.id} style={{ paddingBottom: 68 }}>
            <a href={item.url} className={styles.link}>
              <Card style={cardStyles} id={`list-group-${id}`}>
                <Card.Body style={bodyStyles}>
                  <Card.Title>
                    {item.heading}
                    <FontAwesomeIcon {...iconConfig} />
                  </Card.Title>
                  <Card.Text style={{ color: 'black' }}>
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
