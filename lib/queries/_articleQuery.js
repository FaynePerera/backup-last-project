import { gql } from 'graphql-request';

const articleQuery = gql`
query article($slug: String!) {
  article(where: { slug: $slug }) {
    id
    summary
    title
    slug
    coverImage {
      id
      url
    }
  }
}
`;

export default articleQuery;
