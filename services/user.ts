import { IUser } from "../utils/interfaces/api/user-interface";
import UserRepository from "../repositories/user"

class UserService {
    public async signupUser(data: Partial<IUser>): Promise<IUser> {
        return await UserRepository.signup(data);
    }

}

export default new UserService();
