let { GraphQLClient, gql } = require("graphql-request");

let client = new GraphQLClient('http://localhost:3000');

const document = gql`
  mutation example($input: CreateUserInput!) {
    create(input: $input) {
        username
    }
  }
`

const variables = {
    input: {
        username: "string"
    }
}

client.request(document, variables).then(resp => console.log(resp)).catch(err => console.error(err));