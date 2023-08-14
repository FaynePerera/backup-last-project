import { gql } from 'graphql-request';

const specialHaftarahQuery = gql`
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

export default specialHaftarahQuery;
