import { ApolloClient, gql } from '@apollo/client';

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:3000',
});

client.query({
  query: gql`
    query example {
      user(user_id: 1) {
        username
      }
    }
  `
}).then(resp => console.log(resp)).catch(err => console.error(err));