import { CreatePostService } from "../services/CreatePostService";
import { GetPostByUserService } from "../services/GetPostByUserService";

const postsResolvers = {
  Mutation: {
    createPost(_: any, { input }) {
      const createPostService = new CreatePostService();
      const post = createPostService.execute(input);
      return post;
    },
  },
  Query: {
    getPostByUser(_:any, { idUser }) {
      const getPostByUserService = new GetPostByUserService();
      const posts = getPostByUserService.execute(idUser);
      return posts;
    },
  },
};

export default postsResolvers;