// Types match up with the database definitions in the back end

export type ValidColor = 'blue' | 'grey' | 'black' | 'white' | 'purple'
export type ValidRole = 'painter' | 'manager' | 'orderer' | 'admin'
export type ValidStatus = 'available' | 'low' | 'out'

export interface Staff {
  name: string
  password: string
  role: ValidRole
}

export interface PaintTable {
  color: ValidColor
  changeAmount: number
  changedBy: number
  changedAt: Date
}
