import { gql } from 'graphql-request';

const portionQuery = gql`
  query parashah($slug: String!) {
    parashah(where: { slug: $slug }) {
      summary
    }
  }
`;

export default portionQuery;
