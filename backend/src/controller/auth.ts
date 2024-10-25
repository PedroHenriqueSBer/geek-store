import { FastifyInstance } from "fastify";
import { authServices } from "../services";

const _authServices = authServices();

const AuthController = async (server: FastifyInstance) => {
  server.get("/ping", async (request, reply) => {
    return _authServices.ping();
  });
};

export default AuthController;
