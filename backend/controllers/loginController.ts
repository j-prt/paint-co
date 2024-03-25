import * as jwt from 'jsonwebtoken'
import { getOneStaffByName } from './staffController'
import { Staff } from '../models'
import { Request, Response } from 'express'

const SECRET = process.env.TOKEN_SECRET!

// POST
export async function loginUser(req: Request, res: Response) {
  const { name, password: pass } = req.body
  let error = false
  let result: unknown

  try {
    result = await getOneStaffByName(name)
  } catch (err) {
    console.error(err)
    error = true
  }

  if (error || !result) {
    res.status(500).send('Error occurred.')
    return
  }

  // No error, result found
  const { password, role, id } = result as Staff

  if (pass === password) {
    res.status(200).json(jwt.sign({ role, id }, SECRET))
  } else {
    res.status(401).json('Unauthorized')
  }
}
