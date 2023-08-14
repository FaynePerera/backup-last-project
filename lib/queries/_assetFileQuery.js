import { gql } from 'graphql-request';

const assetFileQuery = gql`
  query asset($id: ID!) {
    asset(where: { id: $id }) {
      id,
      fileName,
      url
    }
  }
`;

export default assetFileQuery;
