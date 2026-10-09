import { db } from '../db'

async function getGifts()
{
   return  (await db.collection('gifts').find({})).toArray();
}

async function getGift(id)
{
    return (await db.collection('gifts').find({ _id : id}));
}

export default {
    getGifts,
    getGift
}