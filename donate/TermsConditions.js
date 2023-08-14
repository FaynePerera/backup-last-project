import { Row, Col, Container } from 'react-bootstrap';

export default function TermsConditions() {
  return (
    <Container className="bg-gray-100 py-4 " fluid>
      <Row className="d-flex justify-content-center ">
        <Col style={{ maxWidth: 895 }}>
          <div className="py-6 ">
            <h4 className="pb-2">Terms and Conditions Apply</h4>

            <p className="small">
              Your credit/debit card will be billed Monthly or Annually, based
              on your preferences above, with amount you entered, until canceled
              by the account-holder. You can adjust your contribution amount, or
              cancel your participation in the
              <i> FFOZ Friends </i>
              program at
              any time. Simply visit your account page, or notify our Customer
              Care Team by phone or in writing.
            </p>
            <p className="small">
              Upon cancellation* your participation and benefits in the
              <i> FFOZ Friends </i>
              program will end before the next billing date.
            </p>
            <p className="small">
              * Signing up as an
              <i> FFOZ Friends </i>
              at the Ally or Pillar
              levels requires a minimum 12-month commitment if you select to
              receive a full Torah Club Commentary set. Should you decide to
              cancel your participation in the
              <i> FFOZ Friends </i>
              program prior
              to the end of this period, you will be charged at the normal
              selling price of this resource ($300), less all the monthly
              contributions you have made from the time you signed up.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
