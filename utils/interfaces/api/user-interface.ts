import { ObjectId } from "mongodb";
import FillableField from "../global/fillable-field";

export interface IUser {
    _id?: ObjectId;
    fullname: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export const UserFillable: FillableField[] = [
    { column: 'fullname', columnDataType: 'string' },
    { column: 'email', columnDataType: 'string' },
    { column: 'password', columnDataType: 'string' },
    { column: 'createdAt', columnDataType: 'date' },
    { column: 'updatedAt', columnDataType: 'date' },
];
