import { Row, Col } from 'react-bootstrap';
import style from '@/styles/card/ArticleGroupRow.module.scss';
import ArticleCard from '@/components/cards/ArticleCard';

export default function ArticleGroupRow({ articles, url }) {
  return (
    <Row className="row-cols-3 flex-nowrap g-3 g-xxl-5 overflow-auto">
      {articles.map((article) => (
        <Col
          key={article.id}
          className={`col-lg-4 d-flex pt-1 pb-3  ${style.col}`}
        >
          <ArticleCard
            url={url}
            {...article}
          />
        </Col>
      ))}
    </Row>
  );
}
