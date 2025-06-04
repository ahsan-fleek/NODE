"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.getDb = exports.connectToDatabase = void 0;
const mongodb_1 = require("mongodb");
const configuration_1 = require("../configuration");
const logger_1 = require("../utils/helpers/logger");
let db = null;
exports.db = db;
const connectToDatabase = async () => {
    if (!configuration_1.MONOGODB_CONNECTION_STRING) {
        throw new Error("MongoDB connection string is not defined.");
    }
    const client = new mongodb_1.MongoClient(configuration_1.MONOGODB_CONNECTION_STRING);
    try {
        await client.connect();
        exports.db = db = client.db();
        logger_1.log.success('Database connected successfully!');
    }
    catch (error) {
        logger_1.log.error(`MongoDB connection error: ${error}`);
        throw error;
    }
};
exports.connectToDatabase = connectToDatabase;
const getDb = () => {
    if (!db) {
        throw new Error("Database not initialized. Call connectToDatabase() first.");
    }
    return db;
};
exports.getDb = getDb;
//# sourceMappingURL=index.js.map