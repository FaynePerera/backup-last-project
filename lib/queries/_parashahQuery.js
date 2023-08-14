import { gql } from 'graphql-request';

export const parashahQuery = gql`
  query parashah($slug: String!) {
    parashah(where: { slug: $slug }) {
      title
      hebrewTitle
      summary
      outline
      translation
      torahReading
      torahText
      haftarahReading
      haftarahText
      haftarahOutline
      gospelReading
      gospelText

      articles(first: 6, orderBy: publishedAt_DESC) {
        title
        slug
        excerpt
        coverImage {
          url
        }
      }
    }
  }
`;

export const specialHaftarahQuery = gql`
  query specialHaftarah($slug: String!) {
    specialHaftarah(where: { slug: $slug }) {
      title
      gospelReading
      haftarahReading
      outline
      gospelText
      haftarahText
    }
  }
`;

export const portionsPathsQuery = gql`
  {
    portionPaths: parashahs {
      slug
    }
  }
`;
