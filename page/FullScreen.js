import { Container } from 'react-bootstrap';
import styles from '@/styles/page/FullScreen.module.scss';

export default function FullScreen({ children, className, ...props }) {
  return (
    <Container
      className={`g-0 w-100 ${className} ${styles.screen}`}
      fluid
      {...props}
    >
      {children}
    </Container>
  );
}
