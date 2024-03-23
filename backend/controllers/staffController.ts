import { db } from '../database'
import { NewStaff, StaffUpdate } from '../models'
import { Response, Request } from 'express'

// Functions for interacting directly with the database

export async function createStaffDb(staff: NewStaff) {
  return await db
    .insertInto('staff')
    .values(staff)
    .returningAll()
    .executeTakeFirstOrThrow()
}

export async function getAllStaffDb() {
  return await db.selectFrom('staff').selectAll().execute()
}

export async function getOneStaffDb(id: number) {
  return await db
    .selectFrom('staff')
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst()
}

export async function updateStaffDb(staff: StaffUpdate) {
  const { id, ...values } = staff
  if (id) {
    await db.updateTable('staff').set(values).where('id', '=', id).execute()
  } else throw new Error('ID must be included to update.')
}

// Functions to use in routes
export async function getAllStaff(req: Request, res: Response) {
  const staff = await getAllStaffDb()
  res.status(200).json(staff)
}

export async function createStaff(req: Request, res: Response) {
  const staff: NewStaff = req.body
  let error = false
  let result: unknown

  try {
    result = await createStaffDb(staff)
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

export async function getOneStaff(req: Request, res: Response) {
  const id = Number(req.params.id)
  let error = false
  let result: unknown

  try {
    result = await getOneStaffDb(id)
  } catch (err) {
    console.error(err)
    error = true
  }

  if (error) {
    res.status(500).send('Error occurred.')
  } else if (!result) {
    res.status(404).send('No user with that ID')
  } else {
    res.status(200).json(result)
  }
}

export async function updateStaff(req: Request, res: Response) {
  const staff: StaffUpdate = req.body
  let error = false
  let result: unknown

  try {
    result = await updateStaffDb(staff)
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
