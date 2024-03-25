import styled from 'styled-components'
import FlexColumn from './FlexColumn'
import ButtonBox from './ButtonBox'
import Button from './Button'
import { useContext, useState } from 'react'
import Modal from './Modal'
import UpdateLevel from './UpdateLevel'
import UpdateStatus from './UpdateStatus'
import { AuthContext } from '../AuthContext'
import { Navigate } from 'react-router'

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
  const { isAuth, role } = useContext(AuthContext)
  const [isUpdatingLevel, setIsUpdatingLevel] = useState<boolean>(false)
  const [isUpdatingStatus, setIsUpdatingStatus] = useState<boolean>(false)

  if (!isAuth) return <Navigate to='/login' />
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
        {(role === 'orderer' || role === 'painter') && (
          <Button onClick={() => setIsUpdatingLevel(true)}>Update Level</Button>
        )}
        {(role === 'orderer' || role === 'manager') && (
          <Button onClick={() => setIsUpdatingStatus(true)}>
            Update Status
          </Button>
        )}
      </ButtonBox>
      {isUpdatingLevel && (
        <Modal>
          <UpdateLevel setIsUpdating={setIsUpdatingLevel} />
        </Modal>
      )}
      {isUpdatingStatus && (
        <Modal>
          <UpdateStatus setIsUpdating={setIsUpdatingStatus} />
        </Modal>
      )}
    </PaintCardStyle>
  )
}

export default PaintCard
