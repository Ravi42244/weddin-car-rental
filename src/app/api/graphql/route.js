import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import resolvers from "../../Graphql Utils/resolvers";
import typeDefs from "../../Graphql Utils/typeDefs.js";
import { connectMongoDB } from "../../../../Utils/mongoDB/mongoDB_Connection";
import mongoose from "mongoose";

if (mongoose.connection.readyState === 0) {
  connectMongoDB()
    .then(() => {
      return;

    })
    .catch((err) => {
      console.log(err);
    });
}
const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);



export { handler as GET, handler as POST };
