import styles from '@/styles/donate/SupportCard.module.scss';
import { Button, Card } from 'react-bootstrap';

export default function SupportCard({
  title,
  price,
  header,
  max,
  benefits,
  total
}) {
  const isSelected = total >= price && total <= max;
  return (
    <Card className={`${styles.main} bg-white shadow-sm border-0 mb-4`}>
      <Card.Header
        className={`text-center p-3 fs-4 ${styles.header} ${
          isSelected ? 'bg-primary' : 'bg-dark text-white'
        }`}
      >
        {title}
      </Card.Header>
      <Card.Body className="w-100 p-0">
        <div className="pt-5 px-3 m-0">
          <Card.Title className="text-center">
            <span className="fs-4 fw-light">$</span>
            <span className={styles.price}>{isSelected ? total : price}</span>
          </Card.Title>
          <Card.Title className="text-center fs-6">
            {isSelected && total !== price ? 'custom' : 'or more'}
            , monthly
          </Card.Title>
        </div>
        <div className="text-center py-3 px-0 m-0">
          <Button variant="primary" className={isSelected && styles.btnSelect}>
            SELECT
          </Button>
        </div>
        <div className={styles.benefits}>
          <Card.Text className="fs-6">{header}</Card.Text>
          <ul className="pm-3 m-0">
            {benefits.map((benefit, index) => (
              <li key={`benefit_${index}`} className="small">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}
