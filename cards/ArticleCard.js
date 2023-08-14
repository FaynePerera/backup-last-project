import { Card } from 'react-bootstrap';
import Link from 'next/link';
import Markdown from '../text/Markdown';
import { getLabel } from '@/lib/articles/_info';

export default function ArticleCard({
  id,
  url,
  slug,
  coverImage,
  title,
  excerpt,
  parashah,
  articleType,
  articleGroup
}) {
  const label = getLabel(articleType, articleGroup, parashah);

  return (
    <Link href={`${url}${slug}`} className="nostyle">
      <Card key={id} className="lift h-100">
        <Card.Img
          style={{ aspectRatio: '3/2' }}
          variant="top"
          src={coverImage.url}
        />
        <Card.Body className="p-5">
          <Card.Title>
            {label && (
              <p className="fw-normal small text-uppercase mb-2">{label}</p>
            )}

            <p className="fw-normal fs-4 m-0 pb-0 truncate">{title}</p>
          </Card.Title>
          <Card.Text className="fw-small fs-6 mb-0 pb-0 text-body truncate truncate-4">
            <Markdown markdown={excerpt} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
