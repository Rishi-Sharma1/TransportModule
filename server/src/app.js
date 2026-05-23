import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import router from './routes/index.js'
import errorMiddleware from './middlewares/errorMiddleware.js'

const app = express()

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://transport-module.netlify.app'
    ]
  })
)

app.use(helmet())

app.use(morgan('dev'))

app.use(express.json())

app.use(cookieParser())

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'TransportOps API Running'
  })
})

app.use('/api/v1', router)

app.use(errorMiddleware)


export default app