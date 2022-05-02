import Post from "../../../models/Post";

interface IPostRequest {
  content: string;
  author: string;
}

class CreatePostService {
  async execute(data: IPostRequest) {
    const post = await Post.create(data);
    return post;
  }
}

export { CreatePostService };