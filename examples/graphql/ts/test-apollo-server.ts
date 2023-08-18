// npm install @apollo/server express graphql cors body-parser
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import DataLoader from "dataloader";

start().catch(err => console.log(err));

async function start() {

  const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  interface User {
    id: string, name: string
  };

  interface Post {
    id: string, title: string, authorId: string
  }

  const users: User[] = [
    { id: '123', name: 'Alice' },
    { id: '456', name: 'Bob' },
  ];

  const posts: Post[] = [
    { id: '101', title: 'First Post', authorId: '123' },
    { id: '102', title: 'Second Post', authorId: '123' },
    { id: '103', title: 'Hello World', authorId: '456' },
  ];

  // A schema is a collection of type definitions (hence "typeDefs")
  // that together define the "shape" of queries that are executed against
  // your data.
  const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type User {
    id: ID!
    name: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

 type UserName{
  id:ID!
  name:String!
  posts: Post!

 }

  type Query {
    getUser(id: ID!): UserName
    getPost(id: ID!): Post
  }


  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  # type Query {
  #   books: [Book]
  # }
`;

  // Resolvers define how to fetch the types defined in your schema.
  // This resolver retrieves books from the "books" array above.
  const resolvers = {
    Query: {
      // books: (...args: any[]) => {
      //   console.log(args);
      //   return books;
      // },
      getUser: (_: number, { id }: { id: string }) => userLoader.load(id),
      getPost: (_: number, { id }: { id: string }) => postLoader.load(id),
    },
    UserName: {
      posts: async (user: User) => {
        let result = await postLoader.loadMany(posts.filter(post => post.authorId === user.id).map((post)=> {
        console.log("1");
          return post.id;
        } ));
        return result[0];
      },
    },
    Post: {
      author: (post: Post) => userLoader.load(post.authorId),
    },
  };

  const userLoader = new DataLoader(ids => {
    return Promise.resolve(ids.map(id => users.find(function(user) {
      console.log("2")
      return user.id === id;
    })));
  });
  
  const postLoader = new DataLoader(ids => {
    return Promise.resolve(ids.map(id => posts.find(post => post.id === id)));
  });

  interface MyContext {
    token?: string;
  }

  // Required logic for integrating with Express
  const app = express();
  // Our httpServer handles incoming requests to our Express app.
  // Below, we tell Apollo Server to "drain" this httpServer,
  // enabling our servers to shut down gracefully.
  const httpServer = http.createServer(app);

  // Same ApolloServer initialization as before, plus the drain plugin
  // for our httpServer.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  // Ensure we wait for our server to start
  await server.start();

  // Set up our Express middleware to handle CORS, body parsing,
  // and our expressMiddleware function.
  app.use(
    '/',
    bodyParser.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async ({ req }) => req.headers,
    }),
  );

  // Modified server startup
  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/`);

}