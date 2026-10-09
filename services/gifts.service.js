import { db } from '../db.js'

async function getGifts()
{
   return  (await db.collection('gifts').find({})).toArray();
}

async function getGift(id)
{
    return (await db.collection('gifts').findOne({ id : id}));
}
async function getGiftsByFilters(filters) {
    return (await db.collection('gifts').find(filters));
}

export  {
    getGifts,
    getGift, 
    getGiftsByFilters
}