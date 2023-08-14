import { gql } from 'graphql-request';

const backgroundsQuery = gql`
  query backgrounds($slug: String!,$random: Int!) {
    backgrounds(first: 1,skip:$random, where: { tags_every: {slug: $slug}}) {
        id
        title
        text
        image {
          url
          caption
      }
    }
  }
`;

export default backgroundsQuery;
