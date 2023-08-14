import { gql } from 'graphql-request';

const assetQuery = gql`
  query asset($id: ID!) {
    asset(where: { id: $id }) {
      url
      width
      height
      caption
      credit
      isDark
      assetSpecs
    }
  }
`;

export default assetQuery;
