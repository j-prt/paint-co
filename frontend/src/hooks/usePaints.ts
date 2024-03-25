import { useEffect, useState } from 'react'
import { getPaintLevels } from '../utils/apiCalls'
import { PaintLevel } from '../types'

export function usePaints() {
  const [data, setData] = useState<PaintLevel[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    async function getPaints() {
      const { response, error } = await getPaintLevels()
      setIsLoading(false)
      if (error) setIsError(true)
      if (response) setData(response.data)
    }
    getPaints()
  }, [])

  return { data, isLoading, isError }
}
