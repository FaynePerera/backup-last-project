import data from '@/lib/donate/_supportCard';
import { scrollLeft } from '@/utils/_scroll';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SupportCard from './SupportCard';

export default function SupportCardSlider({ total, setTotal }) {
  useEffect(() => {
    let select = null;
    if (total >= 25 && total < 50) {
      select = 1;
    } else if (total >= 50 && total <= 99) {
      select = 2;
    } else if (total >= 100 && total <= 100000) {
      select = 3;
    }
    if (select) {
      scrollLeft('friend_card_scroller', `friend_card_${select}`);
    }
  }, [total]);
  return (
    <Container className="d-flex justify-content-center px-3 px-md-4 px-lg-5" fluid>
      <Row className="gx-3 gx-lg-4 gx-xl-6 row-cols-3 flex-nowrap overflow-auto" id="friend_card_scroller">
        {data.map((d) => (
          <Col
            key={`friend_card_${d.index}`}
            id={`friend_card_${d.index}`}
            style={{ minWidth: 312, maxWidth: 452 }}
            xs={4}
            className="d-flex"
            onClick={() => setTotal(d.price)}
          >
            <SupportCard {...d} total={total} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
