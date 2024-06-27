import UserModel from "../models/user.model.js";

class UserService {
    // create a new user
    async create(data) {
        const user = await UserModel.create(data);
        return user;
    }

    // find a user that matches a query
    async findOne(query) {
        const user = await UserModel.findOne(query);
        return user;
    }

    // get all users that match a query
    async findAll(query) {
        const users = await UserModel.find(query);
        return users;
    }


    
}

export default new UserService();