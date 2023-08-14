import { gql } from 'graphql-request';

export const commentaryQuery = gql`
  query commentary($slug: String!) {
    article(where: { slug: $slug }) {
      id
      slug
      title
      summary
      articleType
      articleGroup
      excerpt
      coverImage{
        url
        caption
      }
      parashah{
        title
        slug
        summary
        torahReading
        haftarahReading
        gospelReading
        articles(first: 4, orderBy: publishedAt_DESC) {
          id
          title
          slug
          excerpt
          coverImage {
            url
          }
        }
      }
      body(first:1){
        ... on Markdown{
          markdownTextAlias: text
        }
      }
      tags{
        id
        title
        slug
      }
    }
  }
`;
export const otherGospelCommentariesQuery = gql`
  query commentaries {
    articles(first: 5, where: { articleType: Gospel_commentary}, orderBy: publishedAt_DESC) {
      id
      title
      slug
      excerpt
      coverImage {
        url
      }
    }
  }
`;
export const commentaryPathsQuery = gql`
{
  commentaries: articles(where: {articleType_in:[Gospel_commentary, Portions_commentary]}) {
    slug
  }
}
`;
