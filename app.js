import 'dotenv/config'
import express from 'express'
import {connectDb} from './db.js'
import cors from 'cors'
import { giftsRouter } from './routes/giftRoutes.js'

const app = express()
app.use(express.json())
app.use(cors())

connectDb();
app.use('/api/gifts', giftsRouter);

app.listen(3000, ()=>{
    console.log('Server is running 3000...')
})