import { Badge } from 'react-bootstrap';

export default function CommentarySectionHeader({ title, summary, label }) {
  return (
    <div className="d-flex flex-column py-5 py-lg-7" style={{ maxWidth: 1209 }}>
      <Badge bg="info" className="fs-4 fw-semibold align-self-start mb-3">
        {label}
      </Badge>
      <p className="fw-bold display-5">{title}</p>
      <p className="fw-normal fs-3 m-0">{summary}</p>
    </div>
  );
}
