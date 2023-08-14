import { Card } from 'react-bootstrap';
import Link from 'next/link';
import Markdown from '../text/Markdown';
import { snakeCaseFormatter } from '@/utils/_format';

export default function ArticleCard({
  url,
  slug,
  coverImage,
  title,
  excerpt,
  parashah,
  articleType,
  articleGroup
}) {
  const tag = () => {
    let value = null;
    if (articleType === 'Portions_commentary' && parashah) {
      value = parashah.title;
    } else if (articleType === 'Gospel_commentary' && articleGroup) {
      value = snakeCaseFormatter(articleType);
    }
    return value;
  };

  return (
    <Card className="mb-5">
      <Card.Img variant="top" src={coverImage.url} />
      <Card.Body className="p-5">
        <Card.Title>
          {tag && <p className="fw-normal small text-uppercase">{tag}</p>}

          <p className="fw-normal fs-4 m-0 pb-0 truncate">{title}</p>
        </Card.Title>
        <Card.Text>
          <Markdown markdown={excerpt} />
        </Card.Text>
        <Link href={`${url}${slug}`} className="btn btn-sm btn-dark">
          Read Commentary
        </Link>
      </Card.Body>
    </Card>
  );
}
