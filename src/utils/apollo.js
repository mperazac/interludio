import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'https://interludio-information.herokuapp.com/v1/graphql',
  fetch,
});
