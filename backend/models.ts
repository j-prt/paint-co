import { Generated, Insertable, Selectable, Updateable } from 'kysely'

// Columns designated as 'Generated' types will not be required when passing data for insertions

export interface Database {
  staff: StaffTable
  paintUse: PaintTable
  status: StatusTable
}

export interface StaffTable {
  id: Generated<number>
  name: string
  password: string
  role: 'painter' | 'manager' | 'orderer' | 'admin'
}

export interface PaintTable {
  id: Generated<number>
  color: 'blue' | 'grey' | 'black' | 'white' | 'purple'
  changeAmount: number
  changedBy: number // ID of the user who made the change
  changedAt: Date
}

export interface StatusTable {
  id: Generated<number>
  color: 'blue' | 'grey' | 'black' | 'white' | 'purple'
  status: 'available' | 'low' | 'out'
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
