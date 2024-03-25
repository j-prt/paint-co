import PaintCard from '../ui/PaintCard'
import Heading from '../ui/Heading'
import { usePaints } from '../hooks/usePaints'
import Loader from '../ui/Loader'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { Navigate } from 'react-router'
import styled from 'styled-components'

// This provides a level of responsiveness, but I would have
// preferred to work out a more elegant solution.
const PaintGrid = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
`

function PaintStatus() {
  const { data, isLoading, isError } = usePaints()
  const { isAuth } = useContext(AuthContext)
  console.log(data)

  if (isLoading) return <Loader />

  if (!isLoading && isError) return

  if (!isAuth) return <Navigate to='/login' />

  return (
    <>
      <Heading>Paint Status</Heading>
      <PaintGrid>
        {data?.map(level => (
          <PaintCard paintData={level} key={level.color} />
        ))}
      </PaintGrid>
    </>
  )
}

export default PaintStatus
