import DOMPurify from 'dompurify';
import { toClass } from '@/utils/_markdown';
import he from 'he';

export default function Markdown({ markdown }) {
  const clean = DOMPurify.sanitize(he.decode(toClass(markdown)));
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}
