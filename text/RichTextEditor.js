import { MDXRemote } from 'next-mdx-remote';

export default function RichTextEditor({ richText }) {
  return <MDXRemote {...richText.mdx} />;
}
