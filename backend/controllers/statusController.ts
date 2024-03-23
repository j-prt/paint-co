import { db } from '../database'
import { NewStatus, StatusUpdate } from '../models'

export async function createStatus(status: NewStatus) {
  return await db
    .insertInto('status')
    .values(status)
    .returningAll()
    .executeTakeFirstOrThrow()
}

export async function getAllStatus() {
  return await db.selectFrom('status').selectAll().execute()
}

export async function updateStaff(status: StatusUpdate) {
  const { id, ...values } = status
  if (id) {
    await db.updateTable('status').set(values).where('id', '=', id).execute()
  } else throw new Error('ID must be included to update.')
}
