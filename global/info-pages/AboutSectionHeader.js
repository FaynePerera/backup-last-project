import { Container } from 'react-bootstrap';

export default function CommentarySectionHeader({ title, summary }) {
  return (
    <Container fluid className="bg-light">
      <div className="d-flex flex-column align-items-center py-5 py-lg-10 px-4">
        <p className="fw-bold display-5 text-center">{title}</p>
        <p
          className="fw-normal fs-3 m-0 text-center fst-italic text-body "
          style={{ maxWidth: '1100px' }}
        >
          {summary}
        </p>
      </div>
    </Container>
  );
}
