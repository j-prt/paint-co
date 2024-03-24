import styled from 'styled-components'

const Header = styled.h1`
  margin: 0 auto 3rem;
  font-size: 6rem;
`

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`

const PaintCard = styled.div``

function PaintStatus() {
  return (
    <>
      <Header>Paint Status</Header>
      <Main>
        <PaintCard>card</PaintCard>
        <PaintCard>card</PaintCard>
        <PaintCard>card</PaintCard>
        <PaintCard>card</PaintCard>
        <PaintCard>card</PaintCard>
      </Main>
    </>
  )
}

export default PaintStatus
