import { gql } from 'graphql-request';

const torahPortionQuery = gql`
  query parashah($slug: String!) {
    parashah(where: { slug: $slug }) {
      title
      image {
        id
        caption
        credit
        url
        assetSpecs
      }
    }
    gospelArticles: articles(where: {articleType: Gospel_commentary } first: 3, orderBy:publishedAt_DESC) {
      id
      title
      summary
      excerpt
      slug
      articleType
      articleGroup
      coverImage {
        id
        url
      }        
    }
    torahArticles:articles(where: {articleType: Portions_commentary } first: 3, orderBy:publishedAt_DESC) {
      id
      title
      summary
      excerpt
      slug
      articleType
      coverImage {
        id
        url
      }
      parashah{
        title
      }        
    }
  }
`;

export default torahPortionQuery;
