import fastify from "fastify";
import { AuthController } from "./controller";

const server = fastify();

server.register(AuthController);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
