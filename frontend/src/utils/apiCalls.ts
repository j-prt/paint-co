import axios from 'axios'
import { API_URL } from '../constants'

export async function login(data) {
  try {
    const response = await axios.post(`${API_URL}/login`, data)
    console.log(response)
    return { response }
  } catch (err) {
    console.log(err)
    return { error: 'Login Error' }
  }
}

export async function getPaintLevels() {
  try {
    const response = await axios.get(`${API_URL}/paints`)
    console.log(response)
    return { response }
  } catch (err) {
    console.log(err)
    return { error: 'Paint Fetch Error' }
  }
}

export async function changePaintLevel(data) {
  try {
    const response = await axios.post(`${API_URL}/paints`, data)
    console.log(response)
    return { response }
  } catch (err) {
    console.log(err)
    return { error: 'Paint Change Error' }
  }
}

export async function changePaintStatus(color: string, status: string) {
  try {
    const response = await axios.patch(`${API_URL}/status/${color}`, { status })
    console.log(response)
    return { response }
  } catch (err) {
    console.log(err)
    return { error: 'Paint Change Error' }
  }
}
export async function changeUserDetails() {}

export async function getALlUsers() {}
