import Stripe from '@/lib/payment/_stripe';
import shoko from '@/lib/_shoko';
import styles from '@/styles/payment/SavedCards.module.scss';
import { useEffect, useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CardDetails from './CardDetails';
import CreditCard from './CreditCard';

export default function SavedCards({
  setPaymentMethod,
  getPaymentMethod,
  showMakeDefault,
  cardName
}) {
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [chooseCard, setChooseCard] = useState(null);
  const [getCardDetails, setGetCardDetails] = useState(0);
  const changeCard = (card) => {
    setSelectedCard(card);
    setModalShow(false);
    setChooseCard(null);
  };
  useEffect(() => {
    shoko.get('/payments/methods').then((res) => {
      if (res.data.length > 0) {
        setCards(res.data);
        const primary = res.data.find((card) => card.default === true);
        setSelectedCard(primary);
      } else {
        setAddNew(true);
      }
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    if (getPaymentMethod > 0) {
      if (addNew) {
        setGetCardDetails(getCardDetails + 1);
      } else {
        setPaymentMethod({ id: selectedCard.id, make_default: false, save_payment: false });
      }
    }
  }, [getPaymentMethod]);
  return (
    <Stripe>
      <div>
        {loading ? (
          <Skeleton count={5} />
        ) : (
          selectedCard && (
            <>
              <Row>
                <Col>
                  <h4>Payment method</h4>
                  <p className="xxsmall fw-semibold em-spacing-05">
                    SELECT PAYMENT METHOD
                  </p>
                </Col>
              </Row>
              <Row className="gx-3 mb-8">
                <Col sm={12} md="auto" lg={6} className="mb-3">
                  <div className="bg-light border border-light rounded-2 px-2 py-2">
                    <CreditCard card={selectedCard.card} />
                  </div>
                </Col>
                <Col
                  sm={12}
                  md="auto"
                  lg={6}
                  className="mb-3 align-items-center d-flex "
                >
                  <button
                    className="btn btn-outline-dark btn-xs"
                    type="button"
                    onClick={() => {
                      setAddNew(!addNew);
                    }}
                  >
                    ADD NEW
                  </button>
                  {cards.length > 1 && (
                    <button
                      className="btn btn-outline-dark ms-3 btn-xs"
                      type="button"
                      onClick={() => {
                        setModalShow(true);
                        setAddNew(false);
                      }}
                    >
                      USE OTHER
                    </button>
                  )}
                </Col>
              </Row>
              {cards.length > 1 && (
                <Modal
                  size="md"
                  aria-labelledby="payment-modal-select"
                  centered
                  onHide={() => setModalShow(false)}
                  show={modalShow}
                  fullscreen="sm-down"
                >
                  <Modal.Header closeButton className="p-3 p-md-4">
                    <Modal.Title
                      className="fw-semibold h5"
                      id="payment-modal-select"
                    >
                      Select a payment method
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="p-3 p-md-4">
                    <Container className="p-0">
                      <p className="mb-4">
                        The following cards have previously been used on your
                        account. Select a card for this transaction. Billing and
                        payment methods can be updated in your account
                        dashboard.
                      </p>
                      {cards.map((card) => (
                        <Row key={`card_${card.id}`}>
                          <Col>
                            <div
                              className={`border border-light rounded-2 px-2 py-2 mb-2 ${
                                styles.paymentList
                              } ${
                                chooseCard && chooseCard.id === card.id
                                  ? 'bg-light'
                                  : ''
                              } `}
                              onClick={() => setChooseCard(card)}
                            >
                              <CreditCard
                                card={card.card}
                                default={card.default}
                              />
                            </div>
                          </Col>
                        </Row>
                      ))}
                      <Row className="pt-4 text-end">
                        <Col xs={12}>
                          <button
                            className={`btn btn-sm btn-primary ${
                              chooseCard === null ? 'disabled' : ''
                            }`}
                            type="button"
                            onClick={() => {
                              changeCard(chooseCard);
                            }}
                          >
                            SELECT
                          </button>
                        </Col>
                      </Row>
                    </Container>
                  </Modal.Body>
                </Modal>
              )}
            </>
          )
        )}
        <Row className={addNew ? 'g-0' : 'visually-hidden'}>
          <Col lg={12}>
            <CardDetails {...{ getCardDetails, setPaymentMethod, showMakeDefault, cardName }} />
          </Col>
        </Row>
      </div>
    </Stripe>
  );
}
