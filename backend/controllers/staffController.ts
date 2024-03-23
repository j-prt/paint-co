import { db } from '../database'
import { NewStaff, StaffUpdate } from '../models'

export async function createStaff(staff: NewStaff) {
  return await db
    .insertInto('staff')
    .values(staff)
    .returningAll()
    .executeTakeFirstOrThrow()
}

export async function updateStaff(staff: StaffUpdate) {
  const { id, ...values } = staff
  if (id) {
    await db.updateTable('staff').set(values).where('id', '=', id).execute()
  } else throw new Error('ID must be included to update.')
}
