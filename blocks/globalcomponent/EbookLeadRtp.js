import { Container, Row, Col } from 'react-bootstrap';
import CustomButton from '../../buttons/CustomButton';
import Images from '../../media/Image';

export default function EbookLeadRtp() {
  const image = {
    assetSpecs: '4x3',
    height: 600,
    url: 'https://media.graphassets.com/tOp5wXjQJuPyEMmWYbiZ',
    width: 800
  };

  return (
    <Container className="px-0 py-5">
      <Row>
        <Col sm={12} md={{ span: 4, offset: 1 }} className="">
          <Images image={image} />
        </Col>
        <Col sm={12} md={1} />
        <Col sm={12} md={6}>
          <h4>FREE EBOOK DOWNLOAD</h4>
          <h1 className="fw-light">
            Learn what the Jewishness of Jesus can teach Christians about
            prayer.
          </h1>
          <p className="fs-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
          <CustomButton btpClass="outline-primary" label="Download Now" />
        </Col>
      </Row>
    </Container>
  );
}
