import { Generated, Insertable, Selectable, Updateable } from 'kysely'
import { ValidColor, ValidRole, ValidStatus } from './types'

// Columns designated as 'Generated' types will not be
// required when passing data for insertions

export interface Database {
  staff: StaffTable
  paintUse: PaintTable
  status: StatusTable
}

// Table for users of the platform - permissions will be based on their role.
// Only admins will have write permission
export interface StaffTable {
  id: Generated<number>
  name: string
  password: string
  role: ValidRole
}

// This is a transactional table for holding paint use records
// it is append-only, and designed for easy history lookups
export interface PaintTable {
  id: Generated<number>
  color: ValidColor
  changeAmount: number
  changedBy: number // ID of the user who made the change
  changedAt: Date
}

// Primarily this table will be interacted with via UPDATE
export interface StatusTable {
  id: Generated<number>
  color: ValidColor
  status: ValidStatus
}

export type Staff = Selectable<StaffTable>
export type NewStaff = Insertable<StaffTable>
export type StaffUpdate = Updateable<StaffTable>

// PaintUse table is append-only
export type PaintUse = Selectable<PaintTable>
export type NewPaintUse = Insertable<PaintTable>

export type Status = Selectable<StatusTable>
export type NewStatus = Insertable<StatusTable>
export type StatusUpdate = Updateable<StatusTable>
