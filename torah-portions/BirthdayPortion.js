import axios from 'axios';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BirthdayPortionModal from '../modal/BirthdayPortionModal';
import { useGlobalState } from '@/lib/context/globalContext';

export default function BirthdayPortion() {
  const [portion, setPortion] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    birthday: '1971-03-11',
    sunset: 'off'
  });
  const { view } = useGlobalState();

  function updatePortion() {
    axios
      .get(
        `https://www.hebcal.com/converter?cfg=json&date=${formData.birthday}&gs=${formData.sunset}&g2h=1&strict=1`
      )
      .then((response) => {
        setPortion(response.data);
      });
    setModalShow(true);
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  return (
    <Card className="d-flex flex-lg-row border-0 my-8">
      <Card.Img
        variant="top"
        src="https://media.graphassets.com/4T7njcZgQqCSPktlJkQD"
        style={
          view.width >= 991
            ? { aspectRatio: '10/16', maxWidth: '450px' }
            : { aspectRatio: '10/16' }
        }
        className={`${
          view.width >= 991 ? 'rounded-0 rounded-start' : 'rounded-0'
        }`}
      />

      <Card.Body
        className={` bg-dark text-white pt-8 px-lg-8  ${
          view.width >= 991 && 'rounded-end'
        }`}
      >
        <Card.Title className="pb-2">
          <h1>My Birthday Portion</h1>
          <h4 className="text-gray-300">
            Discover the Torah portion that coincides with your Hebrew birthday.
          </h4>
        </Card.Title>

        <p className="fw-bold">Step 1</p>
        <h4 className="pb-3">What is your date of birth?</h4>
        <Form className="mb-2">
          <Form.Control
            type="date"
            min="1500-01-01"
            max="9999-12-31"
            id="birthday"
            size="lg"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            className="mb-4"
            style={{ width: '190px' }}
          />

          <p className="fw-bold">Step 2</p>
          <h4 className="pb-3">What time of day were you born?</h4>

          <Form.Check
            type="radio"
            id="before-sunset"
            name="sunset"
            value="off"
            label="Before Sunset"
            checked={formData.sunset === 'off'}
            onChange={handleChange}
          />

          <Form.Check
            type="radio"
            id="after-sunset"
            name="sunset"
            value="on"
            label="After Sunset"
            checked={formData.sunset === 'on'}
            onChange={handleChange}
          />
        </Form>
        <p className="small">
          In Judaism the day begins at nightfall, so before we can return the
          exact date of your birthday we need to determine what time of day you
          were born.
        </p>

        <Button
          className="btn btn-primary my-2"
          onClick={updatePortion}
          variant="primary"
        >
          Show My Portion
        </Button>
        {portion && (
          <BirthdayPortionModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            portion={portion}
          />
        )}
      </Card.Body>
    </Card>
  );
}
