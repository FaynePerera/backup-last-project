import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';

export default function SimilarTopics({ tags = [] }) {
  return (
    <div className="border border-2 rounded-2 border-light">
      <div className="p-4">
        <h3 className="mb-3 fw-semibold">Similar Topics</h3>
        <div className="mb-4 border-bottom border-light" />
        <Row className="g-3">
          {tags.map((tag) => (
            <Col key={tag.id} xs="auto" className="mb-2">
              <Link href="#" key={tag.slug} className="btn btn-light">
                {tag.title}
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
