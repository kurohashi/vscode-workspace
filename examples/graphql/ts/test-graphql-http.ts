import { buildSchema } from 'graphql';
import express from "express";
import { createHandler } from 'graphql-http/lib/use/express';
console.log(__dirname)
const posts = [
  {
    id: 1,
    title: "Why GraphQL?",
    authorId: 1,
  },
  {
    id: 2,
    title: "Creating a GraphQL API with Apollo Server",
    authorId: 1,
  },
  {
    id: 3,
    title: "This should not be returned",
    authorId: 2,
  },
];

const authors = [
  { id: 1, name: "Saransh Kataria" },
  { id: 2, name: "John Doe" },
];

const schema = buildSchema(`
  type Post {
    id: ID!
    title: String!
    authorId: ID!
  }

  type Author {
    id: ID!
    name: String!
    posts: [Post]
  }

  type Query {
    authors: [Author]
  }
`);

const rootValue = {
  authors: () => authors,
  Author: {
    posts: (parent: any) => {
        console.log(parent);
        return posts.filter((post) => post.authorId === parent.id);
    },
  },
};

const app = express();
app.use(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: rootValue,
  })
);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
