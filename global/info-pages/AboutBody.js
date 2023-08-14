import { MDXRemote } from 'next-mdx-remote';

export default function CommentaryBody({ body }) {
  return (
    <div className=" align-items-center d-flex flex-column ">
      <div className="article-body text-body " style={{ maxWidth: '900px' }}>
        {body[0]?.markdownTextAlias && (
          <MDXRemote {...body[0].markdownTextAlias.mdx} />
        )}
      </div>
    </div>
  );
}
