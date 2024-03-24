import PaintCard from '../ui/PaintCard'
import Main from '../ui/Main'
import Heading from '../ui/Heading'

function PaintStatus() {
  return (
    <>
      <Heading>Paint Status</Heading>
      <Main>
        <PaintCard />
        <PaintCard />
        <PaintCard />
        <PaintCard />
        <PaintCard />
      </Main>
    </>
  )
}

export default PaintStatus
