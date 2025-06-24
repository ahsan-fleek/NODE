import { IUser, UserFillable } from "../utils/interfaces/api/user-interface";
import BaseModel from "./base-model";


class UserModel extends BaseModel<IUser> {
    protected static getFillable(){
        return UserFillable;
    }   

    public static create(data: Partial<IUser>): IUser {
        const fillables = this.getFillable();
        return this.fill(data, fillables);
    }

}

export default UserModel