import { getGifts, getGift } from '../services/gifts.service.js'
import { Router } from 'express'

const giftsRouter = new Router();

giftsRouter.get('/', async (req, res)=>{
    const gifts = await getGifts()
    return res.json(gifts)
});

giftsRouter.get('/:id', async (req, res)=>{
    const id = req.params.id;
    const data = await getGift(id);
    res.json(data);
})

export {
    giftsRouter
};