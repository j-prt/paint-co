import styled, { css } from 'styled-components'
import FlexColumn from './FlexColumn'
import ButtonBox from './ButtonBox'
import Button from './Button'
import { useContext, useState } from 'react'
import Modal from './Modal'
import UpdateLevel from './UpdateLevel'
import UpdateStatus from './UpdateStatus'
import { AuthContext } from '../AuthContext'
import { Navigate } from 'react-router'
import { PaintLevel } from '../types'

interface PaintMeterProps {
  $color: string
}

const PaintCardStyle = styled(FlexColumn)`
  padding: 1.5rem;
  gap: 0.5rem;
  align-items: center;
  width: 12rem;
  height: 30rem;
  background-color: #fff;
`

const PaintMeter = styled.div<PaintMeterProps>`
  width: 8rem;
  height: 16rem;
  border: solid 1px;

  ${props => css`
    background-image: linear-gradient(
      #eee,
      #eee 50%,
      ${props.$color} 50%,
      ${props.$color}
    );
  `}
`

const Title = styled.p`
  text-transform: capitalize;
`

interface PaintCardProps {
  paintData: PaintLevel
}

function PaintCard({ paintData }: PaintCardProps) {
  const { isAuth, role } = useContext(AuthContext)
  const [isUpdatingLevel, setIsUpdatingLevel] = useState<boolean>(false)
  const [isUpdatingStatus, setIsUpdatingStatus] = useState<boolean>(false)

  if (!isAuth) return <Navigate to='/login' />
  return (
    <PaintCardStyle>
      <Title>{paintData.color}</Title>
      <PaintMeter $color={paintData.color} />
      <p>
        Level: {paintData.total}
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
