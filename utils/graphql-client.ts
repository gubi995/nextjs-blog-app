import { GraphQLClient } from 'graphql-request';

export const getHeaders = (token: string) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  };
};

const client = new GraphQLClient(process.env.API_ENDPOINT!, getHeaders(process.env.API_TOKEN!));

export default client;
