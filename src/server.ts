import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from '@graphql-tools/schema';

import resolvers from "./resolvers";
import typeDefs from "./schemas";
import { routes } from "./routes";

mongoose.connect("mongodb+srv://");

const app = express();

app.use(express.json());

app.use(routes);

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json(error.message);
    }

    return response.status(500).json(error);
  }
);

app.listen(4003, () => console.log("Server is running"));
