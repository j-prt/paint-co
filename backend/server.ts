import express from 'express'
import morgan from 'morgan'
import router from './routes'

const port = 4000

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(router)

const server = app.listen(port, () => console.info(`Listening on ${port}...`))
