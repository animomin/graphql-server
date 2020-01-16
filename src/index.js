import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";
import dotenv from "dotenv";

dotenv.config();

const server = new GraphQLServer({
  typeDefs: __dirname + "/graphql/schema.graphql",
  resolvers
});

const options = {
  port: process.env.PORT
};

server.start(options, ({ port }) =>
  console.log(`GrapQL Server is running on port ${port}`)
);
