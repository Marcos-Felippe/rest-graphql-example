import { Request, Response } from "express";
import { GetPostByUserService } from "../services/GetPostByUserService";

class GetPostsByUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getPostByUserService = new GetPostByUserService();
    const posts = await getPostByUserService.execute(id);
    return response.json(posts);
  }
}

export { GetPostsByUserController };