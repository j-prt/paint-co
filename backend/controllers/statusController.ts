import { db } from '../database'
import { NewStatus, StatusUpdate } from '../models'
import { Response, Request } from 'express'
import { ValidColor } from '../types'

// Functions for interacting directly with the database
export async function createStatusDb(status: NewStatus) {
  return await db
    .insertInto('status')
    .values(status)
    .returningAll()
    .executeTakeFirstOrThrow()
}

export async function getAllStatusDb() {
  return await db.selectFrom('status').selectAll().execute()
}

export async function updateStatusDb(color: ValidColor, status: StatusUpdate) {
  await db
    .updateTable('status')
    .set(status)
    .where('color', '=', color)
    .execute()
}

// Functions for use in routes
// Each function has basic error handling, returning
// a 500 or 404 depending on the results of the DB query.

// GET
export async function getAllStatus(_req: Request, res: Response) {
  let error = false
  let result: unknown

  try {
    result = await getAllStatusDb()
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

// TODO
// export async function createStatus(status: NewStatus) {}

// PATCH
export async function updateStatus(req: Request, res: Response) {
  const staff: StatusUpdate = req.body
  const color = req.params.color as ValidColor
  let error = false
  let result: unknown

  try {
    result = await updateStatusDb(color, staff)
  } catch (err) {
    console.error(err)
    error = true
  }

  // TODO
  // Handle invalid color submissions
  if (error) {
    res.status(500).send('Error occurred.')
  } else {
    res.status(204).json(result)
  }
}
