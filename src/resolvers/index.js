import { getUser, getUsers } from "./db/user";

const resolvers = {
  Query: {
    user: (_, { userId, userName }) => getUser(userId, userName),
    users: (_, { areaId, positionId }) => getUsers(areaId, positionId)
  }
};

export default resolvers;
