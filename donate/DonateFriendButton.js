import { Row, Col, Card, Container } from 'react-bootstrap';
import Image from 'next/image';
import styles from '@/styles/donate/DonateFriendButton.module.scss';
import donate from '../../public/logos/custom/donate-icon-symbol-isolated-black.svg';
import friends from '../../public/logos/friends/friends-icon-isolated-black.svg';

const text = {
  friend: 'Support us monthly and receive special benefits',
  donate: 'Send a one-time donation securely online'
};

export default function DonateFriendButton({ isFriend, setIsFriend }) {
  return (
    <Container style={{ marginTop: -100 }} fluid>
      <Row className="justify-content-center">
        <Row
          className={`mb-3 ${styles.container}`}
          style={{ maxWidth: '1150px' }}
        >
          <Col className="p-0 m-0 my-auto">
            <Card
              className={`text-center ${styles.card} ${styles.donate} ${
                isFriend ? styles.inactive : styles.active
              }`}
              onClick={() => {
                setIsFriend(false);
              }}
            >
              <Card.Body className={styles.body}>
                <div>
                  <Image
                    src={donate.src}
                    alt="Donate icon"
                    height={64}
                    width={79}
                    className={styles.icon}
                  />
                  <Card.Title className={styles.title}>DONATE</Card.Title>
                  <Card.Text className="d-none d-lg-block fs-5">
                    {text.donate}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-0 p-0 my-auto">
            <Card
              className={`text-center ${styles.card} ${styles.friend}  ${
                !isFriend ? styles.inactive : styles.active
              }`}
              onClick={() => {
                setIsFriend(true);
              }}
            >
              <Card.Body className={styles.body}>
                <div>
                  <Image
                    src={friends.src}
                    alt="First Fruis of Zion friends icon"
                    height={64}
                    width={86}
                    className={styles.icon}
                  />
                  <Card.Title className={styles.title}>
                    BECOME A FRIEND
                  </Card.Title>
                  <Card.Text className="d-none d-lg-block fs-5">
                    {text.friend}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col
            className="d-block d-lg-none text-center fs-5"
            style={{ maxWidth: 320 }}
          >
            <p>{isFriend ? text.friend : text.donate}</p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
