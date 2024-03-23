import { db } from '../database'
import { NewStatus, StatusUpdate } from '../models'
import { Response, Request } from 'express'

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

export async function updateStatusDb(status: StatusUpdate) {
  const { color, ...values } = status
  if (color) {
    await db
      .updateTable('status')
      .set(values)
      .where('color', '=', color)
      .execute()
  } else throw new Error('ID must be included to update.')
}

// Functions for use in routes
// Each function has basic error handling, returning
// a 500 or 404 depending on the results of the DB query.

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
// export async function createStatus(status: NewStatus) {}
export async function updateStatus(req: Request, res: Response) {
  const staff: StatusUpdate = req.body
  let error = false
  let result: unknown

  try {
    result = await updateStatusDb(staff)
  } catch (err) {
    console.error(err)
    error = true
  }

  if (error) {
    res.status(500).send('Error occurred.')
  } else {
    res.status(204).json(result)
  }
}
