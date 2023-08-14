import { Container } from 'react-bootstrap';
import Images from '../media/Image';

export default function ImageBanner({ imageBannerImageAlias }) {
  return (
    <Container fluid style={{ paddingRight: 0, paddingLeft: 0 }}>
      <Images image={imageBannerImageAlias} />
    </Container>
  );
}
