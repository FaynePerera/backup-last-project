import { Container, Row, Col } from 'react-bootstrap';
import CustomButton from '@/components/buttons/CustomButton';
import styles from '@/styles/blocks/ButtonsRowA.module.scss';

export default function ButtonsRowA({ buttons, info }) {
  return (
    <Container className={info.class}>
      <Row>
        <Col xs={12} className={styles['main-buttons']}>
          {buttons.map((button) => <CustomButton key={button.id} {...button} />)}
        </Col>
      </Row>
    </Container>
  );
}
