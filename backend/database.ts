import { Database } from './models'
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import * as dotenv from 'dotenv'
dotenv.config()

const USER = process.env.POSTGRES_USER!
const PASS = process.env.POSTGRES_PASS!
const PORT = process.env.POSTGRES_PORT!
const DB_NAME = process.env.DB_NAME!

// Default pool size is 10 connections
const dialect = new PostgresDialect({
  pool: new Pool({
    database: DB_NAME,
    host: 'localhost',
    user: USER,
    password: PASS,
    port: Number(PORT),
  }),
})

export const db = new Kysely<Database>({
  dialect,
})
