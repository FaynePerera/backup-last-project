import SubMenuElement from './SubMenuElement';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/navigation/Subbar.module.scss';

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};
export default function SubBar({ elements, source, center }) {
  let index = 0;

  return (
    <motion.div
      initial="closed"
      animate="open"
      variants={variants}
      id="Subbar"
      className={`bg-light ${styles.subbar} ${
        source === 'submenu' ? styles.submenu : ''
      }`}
    >
      <Container className="g-0 g-lg-3" fluid="lg">
        <Row className="g-0 ">
          <Col>
            <div
              className={`bg-light d-flex flex-wrap flex-lg-nowrap flex-md-nowrap ${
                center && 'justify-content-center align-items-stretch'
              } ${source === 'mobile' && 'flex-column align-items-stretch'}`}
            >
              {elements.map((element) => (
                <div
                  key={index++}
                  className={` ${source === 'mobile' && 'border-bottom'}`}
                >
                  <SubMenuElement {...element} source={source} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}
