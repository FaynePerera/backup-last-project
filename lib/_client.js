import { GraphQLClient } from 'graphql-request';

const hygraphClient = () => new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API_URL);

export default hygraphClient;
