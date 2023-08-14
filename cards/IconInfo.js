import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Card, Col, Row } from 'react-bootstrap';

export default function IconInfo({ items, ...props }) {
  return (
    <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
      {items.map((item, index) => (
        <Col key={`icon_info_${index}`} {...props}>
          <Card className="h-100">
            <Card.Body className="text-center p-4">
              <div
                className="mb-3 align-items-center d-flex justify-content-center"
                style={{ height: '90px' }}
              >
                {item.icon && (
                  <FontAwesomeIcon icon={item.icon} size="4x" />
                )}
                {item.svg && (
                  <Image
                    src={item.svg}
                    alt={item.alt}
                    width={100}
                    height={80}
                  />
                )}
              </div>

              <Card.Title className="mb-3 fs-4">{item.heading}</Card.Title>
              <p
                className="small"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
