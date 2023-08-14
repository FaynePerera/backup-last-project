import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { Row, Col, InputGroup, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCardFront,
  faCreditCard
} from '@fortawesome/pro-light-svg-icons';
import { useEffect, useState } from 'react';

export default function CardDetails({
  setPaymentMethod,
  getCardDetails,
  showMakeDefault,
  cardName
}) {
  const [cardComplete, setCardComplete] = useState(null);
  const [name, setName] = useState(cardName);
  const [makeDefault, setMakeDefault] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const options = {
    style: {
      base: {
        fontSize: '16px'
      },
      invalid: {
        iconColor: '#ad2b2b',
        color: '#ad2b2b'
      }
    }
  };
  const checkCard = async () => {
    const valid = document.getElementsByClassName('StripeElement--complete').length === 3
    && name.length > 1;
    setCardComplete(valid);
    return valid;
  };
  const getPaymentMethod = async () => {
    const card = await checkCard();
    if (!stripe || !elements || !card) {
      setPaymentMethod({ error: 'not_complete' });
      return;
    }
    const billingDetails = {
      name
    };
    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
      billing_details: billingDetails
    });

    if (!result.error) {
      setPaymentMethod({ id: result.paymentMethod.id, make_default: makeDefault, save_payment: true });
    } else {
      setPaymentMethod({ error: 'payment' });
    }
  };
  useEffect(() => {
    if (getCardDetails > 0) {
      getPaymentMethod();
    }
  }, [getCardDetails]);
  return (
    <Container className="g-0">
      <Row className="mb-3">
        <h4>Billing details</h4>
        <Col xs={12}>
          <Form.Label htmlFor="nameOnCard">Name on Card</Form.Label>
          <Form.Control
            className={`form-control ${
              cardComplete === false && name.length < 2 && 'is-invalid'
            }`}
            maxLength="36"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={12}>
          <Form.Label htmlFor="cardNumber" className="form-label">
            Credit/Debit Card Number
          </Form.Label>
          <InputGroup>
            <CardNumberElement
              className="form-control"
              name="cardNumber"
              options={options}
              onChange={() => setCardComplete(null)}
            />
            <InputGroup.Text>
              <FontAwesomeIcon icon={faCreditCardFront} />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={6}>
          <div>
            <Form.Label htmlFor="cardExpiry" className="form-label">
              Expiration Date
            </Form.Label>
            <CardExpiryElement
              className="form-control"
              name="cardExpiry"
              options={options}
            />
          </div>
        </Col>
        <Col xs={6}>
          <div>
            <Form.Label htmlFor="cardCvc" className="form-label">
              CVV/CVC
            </Form.Label>
            <InputGroup>
              <CardCvcElement
                className="form-control"
                name="cardCvc"
                options={options}
              />
              <InputGroup.Text>
                <FontAwesomeIcon icon={faCreditCard} />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </Col>
        {cardComplete === false && (
          <div className="invalid-feedback d-block">
            Please complete card details before continuing
          </div>
        )}
      </Row>
      {showMakeDefault && (
        <Row>
          <Col xs={12}>
            <Form.Group className="mt-3" controlId="makeDefaultCheckbox">
              <Form.Check
                type="checkbox"
                label="Save as primary payment method"
                checked={makeDefault}
                onChange={(e) => setMakeDefault(e.target.checked)}
              />
            </Form.Group>
          </Col>
        </Row>
      )}

      <style jsx global>
        {`
          .StripeElement {
            border: 1px solid #e2e5e9;
            padding: 8.4px;
          }
          .StripeElement.StripeElement--focus {
            border-color: #e6ae23;
            outline: 0;
            box-shadow: none;
          }
          .StripeElement.StripeElement--invalid {
            border-color: #ad2b2b;
          }
          .StripeElement.StripeElement--invalid.StripeElement--focus {
            box-shadow: none;
          }
        `}
      </style>
    </Container>
  );
}
