import { Container, Row, Col, Card } from 'react-bootstrap';
import React from 'react';
import CustomButton from '@/components/buttons/CustomButton';
import { useGlobalState } from '@/lib/context/globalContext';

export default function DevTools() {
  return (
    <Card
      style={{
        position: 'fixed',
        top: '130px',
        right: '1em',
        zIndex: 1099,
        textAlign: 'center'
      }}
    >
      <Card.Title style={{ paddingTop: 10, paddingBottom: 0 }}>
        <p>Dev tools area</p>
      </Card.Title>
      <Card.Body>
        <LoginMocker />
        <hr />
      </Card.Body>
    </Card>
  );
}

// Login Mocker
function LoginMocker() {
  const { isLoggedIn, setIsLoggedIn } = useGlobalState();

  const toggleSession = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Container>
      <Row className="gy-2 g-0">
        <Col xs={12}>
          <p>Toggle Login State</p>
          <CustomButton
            btpClass="btn btn-secondary"
            label={isLoggedIn ? 'Logout' : 'Login'}
            action={toggleSession}
          />
          {' '}
        </Col>
      </Row>
    </Container>
  );
}
