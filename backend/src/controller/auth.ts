import { FastifyInstance } from "fastify";

const AuthController = async (server: FastifyInstance) => {
  server.get("/ping", async (request, reply) => {
    return "pong\n";
  });
};

export default AuthController