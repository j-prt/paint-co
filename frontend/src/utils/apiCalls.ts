import axios from 'axios'
import { API_URL } from '../constants'

export async function login(data) {
  try {
    const response = await axios.post(`${API_URL}/login`, data)
    console.log(response)
    return { response }
  } catch (err) {
    console.log(err)
    return { error: 'Error' }
  }
}

export async function getPaintLevels() {}

export async function changePaintLevel() {}

export async function changeUserDetails() {}

export async function getALlUsers() {}
