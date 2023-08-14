import { Card, Row, Col } from 'react-bootstrap';

const isProd = /^true$/i.test(process.env.NEXT_PUBLIC_IS_PROD);

/* eslint-disable */
export default function NotMatching({ componentName, component }) {

  if (!isProd) {
    return (
      <Row className=" g-0">
        <Col>
          <Card style={{ margin: '50px' }}>
            <Card.Body>
              <Card.Title>
                The component <b>{componentName}</b> was <b>NOT</b> found in the
                library.
              </Card.Title>
              <Row>
                <Col className="col-10">
                  <p>Information thats useful for devs</p>
                  <code>{JSON.stringify(component, undefined, 2)}</code>
                </Col>
                <Col className="col-2 justify-content-center align-middle">
                  <img
                    src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                    alt="test"
                    width={'100%'}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  } else {
    return <> {/* A COMPONENT WAS NOT FOUND IN THE LIBRARY */} </>;
  }
}
