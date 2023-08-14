import { gql } from 'graphql-request';

const parashahQuery = gql`
  query parashah($slug: String!) {
    parashah(where: { slug: $slug }) {
      id
      torahText
      outline
    }
  }
`;

export default parashahQuery;
