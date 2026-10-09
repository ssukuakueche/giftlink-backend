import express, { Router } from 'express'
import { getGifts, getGift } from 'services/gifts.service'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const router = new Router()

router.get('/gifts', (req, res)=>{
    const gifts = getGifts()
    return res.json(gifts)
});

router

router.get('/gifts/:id', (req, res)=>{
    const id = req.params.id;
    const data = getGift(id);
    res.json(data);
})

app.use('/api', router);

app.listen(3000, ()=>{
    console.log('Server is running 3000...')
})
sukuakueches@gmail.com