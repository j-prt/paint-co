import styled from 'styled-components'
import PaintCard from '../ui/PaintCard'

const Header = styled.h1`
  margin: 0 auto 3rem;
  font-size: 4rem;
`

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`

function PaintStatus() {
  return (
    <>
      <Header>Paint Status</Header>
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
