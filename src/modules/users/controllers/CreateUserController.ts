import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, username } = request.body;

    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      username,
    });

    return response.json(user);
  }
}

export { CreateUserController };