import styled from 'styled-components'
import FlexColumn from './FlexColumn'
import ButtonBox from './ButtonBox'
import Button from './Button'
import { useState } from 'react'
import Modal from './Modal'
import UpdateLevel from './UpdateLevel'

const PaintCardStyle = styled(FlexColumn)`
  padding: 1.5rem;
  gap: 0.5rem;
  align-items: center;
  width: 12rem;
  height: 30rem;
  background-color: #fff;
`

const PaintMeter = styled.div`
  width: 8rem;
  height: 16rem;
  border: solid 1px;
  background-image: linear-gradient(#fff, #fff 50%, red 50%, red);
`

function PaintCard() {
  const [isUpdatingLevel, setIsUpdatingLevel] = useState<boolean>(false)
  const [isUpdatingStatus, setIsUpdatingStatus] = useState<boolean>(false)
  return (
    <PaintCardStyle>
      <p>Color</p>
      <PaintMeter />
      <p>
        Level: 100
        <br />
        Available
      </p>
      <ButtonBox>
        <Button onClick={() => setIsUpdatingLevel(true)}>Update Level</Button>
        <Button onClick={() => setIsUpdatingStatus(true)}>Update Status</Button>
      </ButtonBox>
      {isUpdatingLevel && (
        <Modal>
          <UpdateLevel setIsUpdating={setIsUpdatingLevel} />
        </Modal>
      )}
      {/* {isUpdatingLevel && (
        <Modal>
          <UpdateStatus setIsUpdating={setIsUpdatingStatus} />
        </Modal>
      )} */}
    </PaintCardStyle>
  )
}

export default PaintCard
