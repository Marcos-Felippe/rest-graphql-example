import { CreateUserService } from "../services/CreateUserService";
import { GetUsersService } from "../services/GetUsersService";

const usersResolvers = {
  Query: {
    getAllUsers() {
      const getUsersService = new GetUsersService();
      const users = getUsersService.execute();
      return users;
    },
  },
  Mutation: {
    createUser(_: any, { input }) {
      const createUserService = new CreateUserService();
      const user = createUserService.execute(input);
      return user;
    },
  },
};

export default usersResolvers;