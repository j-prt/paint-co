import { sql } from 'kysely'
import { db } from '../database'

import { createPaintUseDb } from '../controllers/paintController'
import { createStaffDb } from '../controllers/staffController'
import { createStatusDb } from '../controllers/statusController'
import * as data from './startingValues'

const init = async () => {
  // Remove tables if they already exist in the db
  try {
    await db.schema.dropTable('staff').execute()
  } catch (err) {
    console.error(err)
  }
  try {
    await db.schema.dropTable('paintUse').execute()
  } catch (err) {
    console.error(err)
  }
  try {
    await db.schema.dropTable('status').execute()
  } catch (err) {
    console.error(err)
  }

  // Create each table with some default starting values
  await db.schema
    .createTable('staff')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('name', 'varchar', col => col.notNull())
    .addColumn('password', 'varchar', col => col.notNull())
    .addColumn('role', 'varchar(16)', col => col.notNull())
    .execute()

  console.log('Created staff table')

  await db.schema
    .createTable('paintUse')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('color', 'varchar', col => col.notNull())
    .addColumn('changeAmount', 'integer', col => col.notNull())
    .addColumn('changedBy', 'integer', col => col.notNull())
    .addColumn('changedAt', 'timestamp', col =>
      col.notNull().defaultTo(sql`now()`)
    )
    .execute()

  console.log('Created paints table')

  await db.schema
    .createTable('status')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('color', 'varchar', col => col.notNull())
    .addColumn('status', 'varchar', col => col.notNull())
    .execute()

  console.log('Created status table')

  let results: Promise<unknown>[] = []

  data.PAINTS.forEach(paint =>
    // @ts-expect-error
    results.push(createPaintUseDb(paint))
  )

  // @ts-expect-error
  data.STAFF.forEach(staff => results.push(createStaffDb(staff)))

  data.STATUS.forEach(status =>
    // @ts-expect-error
    results.push(createStatusDb(status))
  )

  const all = await Promise.all(results)
  console.log(`Completed upload of ${all.length} records.`)
}

init()
