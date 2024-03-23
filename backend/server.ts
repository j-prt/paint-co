import express from 'express'
import morgan from 'morgan'

const port = 4000

const app = express()
app.use(morgan('dev'))

const server = app.listen(port, () => console.info(`Listening on ${port}...`))
