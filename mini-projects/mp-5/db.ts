import {MongoClient, Db, Collection} from "mongodb";

const MONGO_URI = process.env.MONGO_URI as string;
if (!MONGO_URI) {
    throw new Error("MongoDB URI environment variable is undefined");
}

const DB_NAME = "URL-db";
export const URL_COLLECTION = "url-collection";
// ensure this const lines up

let client: MongoClient | null = null;
let db: Db | null = null;

async function connect(): Promise<Db> {
    if (!client) {
        client = new MongoClient(process.env.MONGO_URI as string);
        await client.connect();
    }
    return client.db(DB_NAME);
}

export default async function getCollection(collectionName: string): Promise<Collection> {
    if (!db) {
        db = await connect();
    }
    return db.collection(collectionName);
}