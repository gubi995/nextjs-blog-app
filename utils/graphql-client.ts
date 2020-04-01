import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.API_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN!}`,
    Accept: 'application/json',
  },
});

export default client;
