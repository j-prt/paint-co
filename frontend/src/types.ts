// Types match up with the database definitions in the back end

import React from 'react'

export type ValidColor = 'blue' | 'grey' | 'black' | 'white' | 'purple'
export type ValidRole = 'painter' | 'manager' | 'orderer' | 'admin'
export type ValidStatus = 'available' | 'low' | 'out'

export interface Staff {
  id: number
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

export interface PaintLevel {
  total: string
  color: string
  status: string
}

// Base type interface for UpdateLevel and UpdateStatus
export interface UpdateProps {
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>
  color: string
}
