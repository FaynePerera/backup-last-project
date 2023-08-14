import ArticleCardHorizontal from '@/components/cards/ArticleCardHorizontal';
import ArticleCardLarge from '@/components/cards/ArticleCardLarge';

export default function PortionsCommentaryCard({ articles, title }) {
  const primaryArticle = articles[0];

  return (
    <>
      <h2 className="fw-bold mb-4">Commentary</h2>
      <div className="mb-5">
        <ArticleCardLarge
          {...primaryArticle}
          url="/torah-portions/commentary/"
        />
      </div>
      <h4 className="mb-3">
        More From
        {title}
      </h4>

      {articles.slice(1, 6).map((article) => (
        <ArticleCardHorizontal {...article} url="/torah-portions/commentary/" />
      ))}
    </>
  );
}
