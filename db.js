import { MongoClient } from "mongodb";

const MONGO_URL = `${process.env.MONGO_URL}`;
const MONGO_DB = `${process.env.MONGO_DB}`;

const client = new MongoClient(MONGO_URL);

let db;
async function connectDb()
{
    try 
    {
        await client.connect();
        db = client.db(MONGO_DB);
        console.log('Conexao com a DB foi um sucesso!');
        return db;
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