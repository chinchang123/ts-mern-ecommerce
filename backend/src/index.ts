import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { seedRouter } from './routers/seedRouter'
import { productRouter } from './routers/productRouter'

dotenv.config()

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb+srv://jitsopan:1234@cluster0.wsbtbe4.mongodb.net/tsmernbbvc?retryWrites=true&w=majority&appName=Cluster0'
mongoose.set('strictQuery', true)
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch(() => {
    console.log('error mongodb')
  })


const app = express()
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)




app.use('/api/products', productRouter)
app.use('/api/seed', seedRouter)


const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
