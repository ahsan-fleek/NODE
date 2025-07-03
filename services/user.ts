import { IUser } from "../utils/interfaces/api/user-interface";
import { CustomError } from '../utils/errors/custom';
import UserRepository from "../repositories/user"
import { UserDTO } from "../dtos/user.dto";
import SecurityManager from "../utils/helpers/security-manager";

class UserService {
    
    async signupUser(data: Partial<IUser>) {

        const { email, fullname, password } = data

        const existingEmail = await UserRepository.findByEmail(email);
        if (existingEmail) throw new CustomError(400, 'Email already exists');
        
        const existingFullName = await UserRepository.findByFullName(fullname);
        if (existingFullName) throw new CustomError(400, 'Fullname already exists');

        const hashedPassword = await SecurityManager.hashPassword(password);

        const user: IUser = {
            email,
            fullname,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const result = await UserRepository.insertUser(user);
        const createdUser = await UserRepository.findById(result.insertedId.toString());

        if (!createdUser) throw new CustomError(500, 'User creation failed');
        return createdUser;
    }

    async signinUser(data: Partial<IUser>) {
        const {email, password} = data;
        const user = await UserRepository.findByEmail(email);
        if (!user) throw new CustomError(400, 'Invalid email address');

        const isMatch = await SecurityManager.comparePassword(password, user.password);
        if (!isMatch) throw new CustomError(400, 'Invalid password');

        const token =  SecurityManager.generateToken({
            id: user._id,
            email: user.email,
            fullname: user.fullname,
        });
        const userDTO = UserDTO(user);
        return { token, user: userDTO };

    }
    
}

export default new UserService();
