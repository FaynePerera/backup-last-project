import Images from '@/components/media/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/pro-solid-svg-icons';
import { MDXRemote } from 'next-mdx-remote';

export default function CommentaryBody({ coverImage, body }) {
  return (
    <div>
      <div className="mb-3">
        <Images image={coverImage} className="rounded-2" />
      </div>
      <div className="mb-5">
        {coverImage.caption && (
          <div>
            <FontAwesomeIcon icon={faImage} className="me-2" />
            {coverImage.caption}
          </div>
        )}
      </div>

      <div className="article-body text-body">
        {body[0]?.markdownTextAlias && (
          <MDXRemote {...body[0].markdownTextAlias.mdx} />
        )}
      </div>
    </div>
  );
}
