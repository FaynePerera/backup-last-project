import Markdown from '../text/Markdown';

export default function BibleOutline({ markdown }) {
  return (
    <>
      <Markdown {...{ markdown }} />
      <style jsx global>
        {`
          ul.outline_list li {
            list-style: none;
            margin-left: -30px;
            margin-bottom: 6px;
            padding-bottom: 3px;
          }

          ul li span.reference {
            min-width: 180px;
            display: inline-block;
            font-weight: 500;
          }

          @media only screen and (max-width: 48.062em) {
            ul li span.reference {
              display: block;
            }
            ul.outline_list > ul li {
              margin-left: -20px;
            }
          }

          ul li span.listbreak {
            display: none;
          }

          ul li span.summary {
            font-style: italic;
          }
        `}
      </style>
    </>
  );
}
