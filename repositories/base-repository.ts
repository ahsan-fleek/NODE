import { Collection, Db, Filter, InsertOneResult, OptionalUnlessRequiredId, UpdateFilter, Document, WithId, UpdateResult, DeleteResult, ObjectId } from 'mongodb';
import { getDb } from '../database';

export class BaseRepository<T extends Document> {
    private collection: Collection<T> | null = null;
    private readonly collectionName: string;

    constructor(collectionName: string) {
        this.collectionName = collectionName;
    }

    protected getCollection(): Collection<T> {
        if (!this.collection) {
            const db: Db = getDb();
            this.collection = db.collection<T>(this.collectionName);
        }
        return this.collection;
    }

    async findOne(filter: Filter<T>): Promise<WithId<T> | null> {
        return await this.getCollection().findOne(filter);
    }
    async findById(id: string): Promise<WithId<T> | null> {
        const filter = { _id: new ObjectId(id) } as unknown as Filter<T>;
        return this.findOne(filter);
    }

    async insertOne(document: OptionalUnlessRequiredId<T>): Promise<InsertOneResult<T>> {
        return await this.getCollection().insertOne(document);
    }

    async updateOne(filter: Filter<T>, update: UpdateFilter<T>): Promise<UpdateResult> {
        return await this.getCollection().updateOne(filter, update);
    }

    async deleteOne(filter: Filter<T>): Promise<DeleteResult> {
        return await this.getCollection().deleteOne(filter);
    }

    async findMany(filter: Filter<T> = {}): Promise<WithId<T>[]> {
        return await this.getCollection().find(filter).toArray();
    }

    async softDelete(filter: Filter<T>): Promise<UpdateResult> {
        return this.updateOne( filter, { $set: { isDeleted: true, deletedAt: new Date() } } as unknown as UpdateFilter<T>);
      }
      
    async findManyWithNotDeleted(filter: Filter<T> = {}): Promise<WithId<T>[]> {
        const notDeletedFilter = { ...filter, isDeleted: { $ne: true } } as Filter<T>;
        return this.getCollection().find(notDeletedFilter).toArray();
    }

    async findOneWithNotDeleted(filter: Filter<T>): Promise<WithId<T> | null> {
        const notDeletedFilter = { ...filter, isDeleted: { $ne: true } } as Filter<T>;
        return this.getCollection().findOne(notDeletedFilter);
    }
}
