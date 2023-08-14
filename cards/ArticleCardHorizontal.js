import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { useGlobalState } from '@/lib/context/globalContext';
import Markdown from '../text/Markdown';

export default function ArticleCardHorizontal({
  url,
  slug,
  coverImage,
  title,
  excerpt
}) {
  const { isMobile } = useGlobalState();

  return (
    <Link href={`${url}${slug}`} className="nostyle">
      <Card className="d-flex flex-row mb-4 lift" style={{ minWidth: 315 }}>
        {!isMobile && (
          <Card.Img
            variant="top"
            src={coverImage.url}
            className="rounded-0 rounded-start"
            style={{ maxWidth: '150px' }}
          />
        )}

        <Card.Body className="overflow-hidden p-3">
          <Card.Title>
            <div className="d-flex justify-content-between mb-2 fs-5 fw-semibold">
              {title}
            </div>
          </Card.Title>
          <Card.Text className="truncate">
            <Markdown markdown={excerpt} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
