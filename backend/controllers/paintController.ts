import { sql } from 'kysely'
import { db } from '../database'
import { NewPaintUse, PaintTable } from '../models'
import { Response, Request } from 'express'
import { ValidColor } from '../types'

// Functions for interacting directly with the database
export async function getSumByColorDb(color: ValidColor) {
  return await db
    .selectFrom('paintUse')
    .where('color', '=', color)
    .select(sql`sum("changeAmount")`.as('total'))
    .execute()
}

export async function getAllPaintSumsDb() {
  return await db
    .selectFrom('paintUse')
    .groupBy('color')
    .select([sql`sum("changeAmount")`.as('total'), 'color'])
    .execute()
}

export async function createPaintUseDb(paintUse: NewPaintUse) {
  return await db
    .insertInto('paintUse')
    .values(paintUse)
    .returningAll()
    .executeTakeFirstOrThrow()
}

// TODO: all paint use (table scan), to see history.
// Filter by ID/Date range would be interesting too.

// Functions for use in routes
// Each function has basic error handling, returning
// a 500 or 404 depending on the results of the DB query.

// GET
export async function getSumByColor(req: Request, res: Response) {
  const color = req.params.color as ValidColor
  let error = false
  let result: unknown

  try {
    result = await getSumByColorDb(color)
  } catch (err) {
    console.error(err)
    error = true
  }

  if (error) {
    res.status(500).send('Error occurred.')
  } else {
    res.status(200).json(result)
  }
}

// GET
export async function getAllPaintSums(req: Request, res: Response) {
  let error = false
  let result: unknown

  try {
    result = await getAllPaintSumsDb()
  } catch (err) {
    console.error(err)
    error = true
  }

  if (error) {
    res.status(500).send('Error occurred.')
  } else {
    res.status(200).json(result)
  }
}

// POST
export async function createPaintUse(req: Request, res: Response) {
  const usage = req.body as NewPaintUse
  let error = false
  let result: unknown

  try {
    result = await createPaintUseDb(usage)
  } catch (err) {
    console.error(err)
    error = true
  }

  if (error) {
    res.status(500).send('Error occurred.')
  } else {
    res.status(201).json(result)
  }
}
