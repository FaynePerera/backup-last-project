import { gql } from 'graphql-request';

const pageQuery = gql`
  query page($id: ID!) {
    page(where: { id: $id }) {
      id
      seo {
        id
        stage
        title
      }
      slug
      title
      components(first: 100) {
        __typename
        ... on Hero {
          id
          heroLabelAlias: label
          heroHeadingAlias: heading
          heroTextAlias: text
          heroImageAlias: image {
            __typename
            id
            stage
            updatedAt
            caption
            credit
            handle
            fileName
            mimeType
            width
            height
            size
            url
            assetSpecs
          }
          caption
          buttons {
            __typename
            id
            label
            slug
            url
            btpClass: class
          }
          info {
            id
            class
            type
          }
        }
      }
    }
  }
`;

export default pageQuery;
