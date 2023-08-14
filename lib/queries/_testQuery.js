import { gql } from 'graphql-request';

export const commentPageQuery = gql`
    query comment{
        comment(where: {id: "cl7ga9dh67ddh0dimj5srhtey"}) {
            contents
            fullName
            id
        }
    }
`;
export const aboutPageQuery = gql`
    query aboutPageQuery {
        textBlock(where: {id: "cl7p5fy0ypx590ck7ysv4xgiz"}) {
        title
        contents
    }
  }
`;
