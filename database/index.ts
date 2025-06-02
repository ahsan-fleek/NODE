import { MongoClient, Db } from "mongodb";
import { BehaviorSubject } from "rxjs";

class MongoDatabase {
    private static client: MongoClient;
    private static _db: Db;
    public static db = new BehaviorSubject<Db | null>(null);

    public static async connect(uri: string, dbName: string) {
        if (!this.client) {
            this.client = new MongoClient(uri);
            await this.client.connect();
            this._db = this.client.db(dbName);
            this.db.next(this._db);
            console.log(`Connected to MongoDB: ${dbName}`);
        }
    }

    public static getInstance() {
        return this._db;
    }
}

export default MongoDatabase;
