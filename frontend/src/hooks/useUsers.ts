import { useEffect, useState } from 'react'
import { getAllUsers } from '../utils/apiCalls'
import { Staff } from '../types'

export function useUsers() {
  const [data, setData] = useState<Staff[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    async function getUsers() {
      const { response, error } = await getAllUsers()
      setIsLoading(false)
      if (error) setIsError(true)
      if (response) setData(response.data)
    }
    getUsers()
  }, [])

  return { data, isLoading, isError }
}
