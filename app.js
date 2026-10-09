import express, { Router } from 'express'
import { getGifts, getGift } from './services/gifts.service.js'
import {connectDb} from './db.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

connectDb();
const router = new Router()

app.get('', (req, res)=>{
    res.json({
        message: 'Server is running...'
    })
})

router.get('/gifts', async (req, res)=>{
    const gifts = await getGifts()
    return res.json(gifts)
});

router

router.get('/gifts/:id', async (req, res)=>{
    const id = req.params.id;
    const data = await getGift(id);
    res.json(data);
})

app.use('/api', router);

app.listen(3000, ()=>{
    console.log('Server is running 3000...')
})