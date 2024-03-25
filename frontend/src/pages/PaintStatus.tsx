import PaintCard from '../ui/PaintCard'
import Main from '../ui/Main'
import Heading from '../ui/Heading'
import { usePaints } from '../hooks/usePaints'
import Loader from '../ui/Loader'

function PaintStatus() {
  const { data, isLoading, isError } = usePaints()
  console.log(data)

  if (isLoading) return <Loader />

  if (!isLoading && isError) return

  return (
    <>
      <Heading>Paint Status</Heading>
      <Main>
        {data?.map(level => (
          <PaintCard paintData={level} key={level.color} />
        ))}
      </Main>
    </>
  )
}

export default PaintStatus
