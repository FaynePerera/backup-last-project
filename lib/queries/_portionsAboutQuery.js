import { gql } from 'graphql-request';

export const portionsAboutQuery = gql`
  query commentary($slug: String!) {
    article(where: { slug: $slug }) {
      id
      slug
      title
      summary
      excerpt
      articleType
      articleGroup
      coverImage {
        url
        caption
      }

      body(first: 1) {
        ... on Markdown {
          markdownTextAlias: text
        }
      }
    }
  }
`;
export const portionsAboutPathsQuery = gql`
  {
    commentaries: articles(where: { articleType_in: [General_information] }) {
      slug
    }
  }
`;
