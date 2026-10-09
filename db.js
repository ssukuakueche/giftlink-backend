import { MongoClient } from "mongodb";

const MONGO_URL = 'mongodb://localhost:27017';
const MONGO_DB = 'giftlink';

const client = new MongoClient(MONGO_URL);

let db;
async function connectDb()
{
    try 
    {
        await client.connect();
        db = client.db(MONGO_DB);
        console.log('Conexao com a DB foi um sucesso!');
    }
    catch (ex)
    {
        console.log('Problema ao conectar na DB!');
    }
}

export  {
    db,
    connectDb
}