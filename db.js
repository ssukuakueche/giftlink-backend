import { MongoClient } from "mongodb";

const MONGO_URL = 'mongodb://localhost:27017';
const MONGO_DB = 'giftlink';

const client = new MongoClient(MONGO_URL);

let db;
function connectDb()
{
    client.connect();
    db = client.db(MONGO_DB);
}

export default {
    db,
    connectDb
}