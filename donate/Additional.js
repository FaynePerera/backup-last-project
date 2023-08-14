import IconInfo from '@/components/cards/IconInfo';
import additionalDonate from '@/lib/donate/_additionalDonate';
import { Container } from 'react-bootstrap';

export default function Additional() {
  return (
    <Container className="bg-gray-100 px-5 py-8" fluid>
      <h2 className="text-center mb-5">
        Additional ways to donate to
        <span className="d-inline-flex">First Fruits of Zion</span>
      </h2>
      <Container className="px-lg-4 px-xl-6 px-xxl-10 text-center">
        <IconInfo items={additionalDonate} className="mb-5" />
      </Container>
    </Container>
  );
}
