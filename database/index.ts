import { MongoClient, Db } from "mongodb";
import { MONOGODB_CONNECTION_STRING } from "../configuration";
import { log } from "../utils/helpers/logger";

let db: Db | null = null;

export const connectToDatabase = async (): Promise<void> => {
  if (!MONOGODB_CONNECTION_STRING) {
    throw new Error("MongoDB connection string is not defined.");
  }
  const client = new MongoClient(MONOGODB_CONNECTION_STRING);
  try {
    await client.connect();
    db = client.db(); 
    log.success('Database connected successfully!');
  } catch (error) {
    log.error(`MongoDB connection error: ${error}`);
    throw error;
  }
};

export const getDb = (): Db => {
  if (!db) {
    throw new Error("Database not initialized. Call connectToDatabase() first.");
  }
  return db;
};

export { db };
