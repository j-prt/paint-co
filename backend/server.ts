import express from 'express'

const port = 4000

const app = express()

const server = app.listen(port, () => console.info(`Listening on ${port}...`))
