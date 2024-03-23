import { sql } from 'kysely'
import { db } from '../database'
import { NewPaintUse, PaintTable } from '../models'

export async function getSumByColor(color: PaintTable['color']) {
  return await db
    .selectFrom('paintUse')
    .where('color', '=', color)
    .select(sql`sum(changeAmount)`.as('totalUse'))
    .execute()
}

export async function getAllSumsByColor() {
  return await db
    .selectFrom('paintUse')
    .groupBy('color')
    .select([sql`sum(changeAmount)`.as('totalUse'), 'color'])
    .execute()
}

export async function createPaintUse(paintUse: NewPaintUse) {
  return await db
    .insertInto('paintUse')
    .values(paintUse)
    .returningAll()
    .executeTakeFirstOrThrow()
}

// TODO: all paint use (table scan), to see history.
// Filter by ID/Date range would be interesting too.
