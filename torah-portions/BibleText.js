import Markdown from '../text/Markdown';

export default function BibleText({ markdown }) {
  return (
    <>
      <Markdown {...{ markdown }} />
      <style jsx global>
        {`
          .esv > p {
            font-family: 'capitolium-2', serif;
            font-size: 20px;
            line-height: 1.6;
          }
          .starts-chapter > b.chapter-num {
            font-size: 28px;
            padding-right: 10px;
          }
          .verse-num {
            font-style: italic;
            font-size: 14px;
            padding-left: 10px;
            padding-right: 4px;
            font-weight: 400;
          }
          h2.extra_text {
            font-size: 36px;
          }
          .esv > h3 {
            color: #999ca0;
            margin-top: 2rem;
          }
        `}
      </style>
    </>
  );
}
