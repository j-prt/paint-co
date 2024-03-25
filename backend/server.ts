import express from 'express'
import morgan from 'morgan'
import router from './routes'
import path from 'path'

const port = 4000

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(router)
app.use(express.static(path.join(__dirname, '../frontend', 'dist')))

const server = app.listen(port, () => console.info(`Listening on ${port}...`))
