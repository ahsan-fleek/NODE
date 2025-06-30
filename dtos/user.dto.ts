import { ObjectId } from 'mongoose';
import { IUser } from '../utils/interfaces/api/user-interface';

export interface UserDTO {
    _id: ObjectId | string; 
    email: string;
    fullname: string;
}

export const UserDTO = (user: IUser): UserDTO => {
    return {
        _id: user._id?.toString() || '',
        email: user.email,
        fullname: user.fullname,
    };
};
