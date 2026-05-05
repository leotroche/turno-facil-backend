import cors from 'cors'
import express from 'express'

import { errorHandler } from './middlewares/error.middleware'
import { userRouter } from './routes/user.routes'
export const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello, World!' })
})

app.use('/users', userRouter)

// Error handling middleware
app.use(errorHandler())
