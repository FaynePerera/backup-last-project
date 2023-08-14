import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import PortionDropdown from './PortionDropdown';

export default function PortionSchedule() {
  const [activeKey, setActiveKey] = useState();

  const toggleActiveKey = (key) => {
    setActiveKey(key);
  };
  return (
    <>
      <div className="mt-5">
        <h2 className="fw-bold">Complete Torah Portions Schedule</h2>
        <h5>
          Schedule of all upcoming weekly readings of the Torah and Haftarah
          sorted by first five books of the Torah.
        </h5>
        <span>
          Click on an individual portion for reading details and links.
        </span>
      </div>
      <Container className="px-0 py-5 d-flex ">
        <Row className="flex-nowrap overflow-auto" id="portion_card_scroller">
          <PortionDropdown
            parashah="Genesis"
            toggleActiveKey={toggleActiveKey}
            activeKey={activeKey}
          />
          <PortionDropdown
            parashah="Exodus"
            toggleActiveKey={toggleActiveKey}
            activeKey={activeKey}
          />
          <PortionDropdown
            parashah="Leviticus"
            toggleActiveKey={toggleActiveKey}
            activeKey={activeKey}
          />
          <PortionDropdown
            parashah="Numbers"
            toggleActiveKey={toggleActiveKey}
            activeKey={activeKey}
          />
          <PortionDropdown
            parashah="Deuteronomy"
            toggleActiveKey={toggleActiveKey}
            activeKey={activeKey}
          />
        </Row>
      </Container>
    </>
  );
}
