import { Collection, Db, WithId } from "mongodb";
import { getDb } from "../database";
import { CustomError } from "../utils/errors/custom";
import { IUser } from "../utils/interfaces/api/user-interface";
import UserModel from "../models/user";

class UserRepository {
  private collection: Collection<IUser> | null = null;
  
  private getCollection(): Collection<IUser> {
    if (!this.collection) {
      const db: Db = getDb(); 
      this.collection = db.collection<IUser>("users");
    }
    return this.collection;
  }

  async signup(data: Partial<IUser>): Promise<WithId<IUser>> {
    try {
      const user: IUser = UserModel.create(data);
      const result = await this.getCollection().insertOne(user);
      const createdUser = await this.getCollection().findOne({ _id: result.insertedId });
      if (!createdUser)  {
        throw new CustomError(500, "user creation failed");
      }
      return createdUser;
    } catch (error) {
      console.error("Error adding todo:", error);
      throw error;
    }
  }



}

export default new UserRepository();
