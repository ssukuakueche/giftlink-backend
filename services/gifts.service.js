import { db } from '../db.js'

async function getGifts()
{
   return  (await db.collection('gifts').find({})).toArray();
}

async function getGift(id)
{
    return (await db.collection('gifts').findOne({ _id : id}));
}

export  {
    getGifts,
    getGift
}